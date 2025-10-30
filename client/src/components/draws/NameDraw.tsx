import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DrawResult from '@/components/DrawResult';
import LoadingAnimation from '@/components/LoadingAnimation';

interface NameDrawProps {
  language: 'tr' | 'en';
}

interface DrawResultType {
  winners: string[];
  backups: string[];
  timestamp: Date;
}

const translations = {
  tr: {
    title: 'İsim Çekilişi',
    description: 'Listenizden rastgele isim seçin',
    inputLabel: 'İsimleri Girin',
    inputPlaceholder: 'Her ismi yeni satıra yazın...',
    winnersLabel: 'Kaç Kazanan Seçilsin?',
    backupsLabel: 'Kaç Yedek Seçilsin?',
    drawButton: 'Çekilişi Yap',
    shareButton: 'Paylaş',
    downloadButton: 'PDF İndir',
    resetButton: 'Sıfırla',
    winners: 'Kazananlar',
    backups: 'Yedekler',
    error: 'Lütfen en az 2 isim girin',
    noBackups: 'Yedek bulunmamaktadır',
  },
  en: {
    title: 'Name Draw',
    description: 'Select random names from your list',
    inputLabel: 'Enter Names',
    inputPlaceholder: 'Enter each name on a new line...',
    winnersLabel: 'Number of Winners',
    backupsLabel: 'Number of Backups',
    drawButton: 'Start Draw',
    shareButton: 'Share',
    downloadButton: 'Download PDF',
    resetButton: 'Reset',
    winners: 'Winners',
    backups: 'Backups',
    error: 'Please enter at least 2 names',
    noBackups: 'No backups',
  },
};

export default function NameDraw({ language }: NameDrawProps) {
  const t = translations[language];
  const [names, setNames] = useState('');
  const [winnerCount, setWinnerCount] = useState(1);
  const [backupCount, setBackupCount] = useState(1);
  const [result, setResult] = useState<DrawResultType | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [error, setError] = useState('');

  const handleDraw = () => {
    setError('');
    const nameList = names
      .split('\n')
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    if (nameList.length < 2) {
      setError(t.error);
      return;
    }

    if (winnerCount + backupCount > nameList.length) {
      setError(
        language === 'tr'
          ? 'Kazanan ve yedek sayısı toplam isim sayısından fazla olamaz'
          : 'Total winners and backups cannot exceed total names'
      );
      return;
    }

    setIsDrawing(true);
    setTimeout(() => {
      const shuffled = [...nameList].sort(() => Math.random() - 0.5);
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
    setNames('');
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
        type="name"
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
            <Label htmlFor="names">{t.inputLabel}</Label>
            <Textarea
              id="names"
              placeholder={t.inputPlaceholder}
              value={names}
              onChange={(e) => setNames(e.target.value)}
              className="min-h-[200px] font-mono text-sm"
              disabled={isDrawing}
            />
            <p className="text-xs text-gray-500">
              {names.split('\n').filter((n) => n.trim()).length} isim
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
            disabled={isDrawing || names.trim().length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
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
