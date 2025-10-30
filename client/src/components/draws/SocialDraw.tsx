import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DrawResult from '@/components/DrawResult';
import LoadingAnimation from '@/components/LoadingAnimation';

interface SocialDrawProps {
  language: 'tr' | 'en';
}

interface DrawResultType {
  winners: string[];
  backups: string[];
  timestamp: Date;
}

const translations = {
  tr: {
    title: 'Sosyal Medya Çekilişi',
    description: 'Sosyal medya gönderilerinden kazanan seçin',
    commentsLabel: 'Yorumları Girin',
    commentsPlaceholder: 'Her yorumu yeni satıra yazın (örn: @kullanıcı1, @kullanıcı2)...',
    winnersLabel: 'Kaç Kazanan Seçilsin?',
    backupsLabel: 'Kaç Yedek Seçilsin?',
    drawButton: 'Çekilişi Yap',
    error: 'Lütfen en az 2 yorum girin',
  },
  en: {
    title: 'Social Media Draw',
    description: 'Select winner from social media posts',
    commentsLabel: 'Enter Comments',
    commentsPlaceholder: 'Enter each comment on a new line (e.g., @user1, @user2)...',
    winnersLabel: 'Number of Winners',
    backupsLabel: 'Number of Backups',
    drawButton: 'Start Draw',
    error: 'Please enter at least 2 comments',
  },
};

export default function SocialDraw({ language }: SocialDrawProps) {
  const t = translations[language];
  const [comments, setComments] = useState('');
  const [winnerCount, setWinnerCount] = useState(1);
  const [backupCount, setBackupCount] = useState(1);
  const [result, setResult] = useState<DrawResultType | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [error, setError] = useState('');

  const handleDraw = () => {
    setError('');
    const commentList = comments
      .split('\n')
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    if (commentList.length < 2) {
      setError(t.error);
      return;
    }

    if (winnerCount + backupCount > commentList.length) {
      setError(
        language === 'tr'
          ? 'Kazanan ve yedek sayısı toplam yorum sayısından fazla olamaz'
          : 'Total winners and backups cannot exceed total comments'
      );
      return;
    }

    setIsDrawing(true);
    setTimeout(() => {
      const shuffled = [...commentList].sort(() => Math.random() - 0.5);
      const winners = shuffled.slice(0, winnerCount);
      const backups = shuffled.slice(winnerCount, winnerCount + backupCount);

      setResult({
        winners,
        backups,
        timestamp: new Date(),
      });
      setIsDrawing(false);
    }, 1500);
  };

  const handleReset = () => {
    setComments('');
    setWinnerCount(1);
    setBackupCount(1);
    setResult(null);
    setError('');
  };

  if (isDrawing) {
    return <LoadingAnimation duration={1500} language={language} />;
  }

  if (result) {
    return (
      <DrawResult
        type="social"
        result={result}
        language={language}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="comments">{t.commentsLabel}</Label>
            <Textarea
              id="comments"
              placeholder={t.commentsPlaceholder}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="min-h-[200px] font-mono text-sm"
              disabled={isDrawing}
            />
            <p className="text-xs text-gray-500">
              {comments.split('\n').filter((c) => c.trim()).length} yorum
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="winners">{t.winnersLabel}</Label>
              <Input
                id="winners"
                type="number"
                min="1"
                value={winnerCount}
                onChange={(e) => setWinnerCount(Math.max(1, parseInt(e.target.value) || 1))}
                disabled={isDrawing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backups">{t.backupsLabel}</Label>
              <Input
                id="backups"
                type="number"
                min="0"
                value={backupCount}
                onChange={(e) => setBackupCount(Math.max(0, parseInt(e.target.value) || 0))}
                disabled={isDrawing}
              />
            </div>
          </div>

          {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

          <Button
            onClick={handleDraw}
            disabled={isDrawing || comments.trim().length === 0}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
          >
            {isDrawing ? (
              <>
                <span className="animate-spin mr-2">⚙️</span>
                {language === 'tr' ? 'Çekiliş Yapılıyor...' : 'Drawing...'}
              </>
            ) : (
              t.drawButton
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
