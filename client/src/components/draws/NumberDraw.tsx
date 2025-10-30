import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DrawResult from '@/components/DrawResult';
import LoadingAnimation from '@/components/LoadingAnimation';

interface NumberDrawProps {
  language: 'tr' | 'en';
}

interface DrawResultType {
  winners: string[];
  backups: string[];
  timestamp: Date;
}

const translations = {
  tr: {
    title: 'Numara Çekilişi',
    description: 'Belirtilen aralıktan rastgele numara seçin',
    minLabel: 'Minimum Numara',
    maxLabel: 'Maksimum Numara',
    winnersLabel: 'Kaç Numara Seçilsin?',
    backupsLabel: 'Kaç Yedek Seçilsin?',
    drawButton: 'Çekilişi Yap',
    error: 'Lütfen geçerli sayılar girin',
    error2: 'Minimum numara maksimumdan küçük olmalıdır',
  },
  en: {
    title: 'Number Draw',
    description: 'Select random number from specified range',
    minLabel: 'Minimum Number',
    maxLabel: 'Maximum Number',
    winnersLabel: 'Number of Winners',
    backupsLabel: 'Number of Backups',
    drawButton: 'Start Draw',
    error: 'Please enter valid numbers',
    error2: 'Minimum must be less than maximum',
  },
};

export default function NumberDraw({ language }: NumberDrawProps) {
  const t = translations[language];
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(100);
  const [winnerCount, setWinnerCount] = useState(1);
  const [backupCount, setBackupCount] = useState(1);
  const [result, setResult] = useState<DrawResultType | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [error, setError] = useState('');

  const handleDraw = () => {
    setError('');
    
    if (minNum >= maxNum) {
      setError(t.error2);
      return;
    }

    const totalNumbers = maxNum - minNum + 1;
    if (winnerCount + backupCount > totalNumbers) {
      setError(language === 'tr' ? 'Çok fazla seçim yapıldı' : 'Too many selections');
      return;
    }

    setIsDrawing(true);
    setTimeout(() => {
      const numbers = Array.from({ length: totalNumbers }, (_, i) => minNum + i);
      const shuffled = numbers.sort(() => Math.random() - 0.5);
      const winners = shuffled.slice(0, winnerCount).map(String);
      const backups = shuffled.slice(winnerCount, winnerCount + backupCount).map(String);

      setResult({
        winners,
        backups,
        timestamp: new Date(),
      });
      setIsDrawing(false);
    }, 1500);
  };

  const handleReset = () => {
    setMinNum(1);
    setMaxNum(100);
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
        type="number"
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="min">{t.minLabel}</Label>
              <Input
                id="min"
                type="number"
                value={minNum}
                onChange={(e) => setMinNum(parseInt(e.target.value) || 0)}
                disabled={isDrawing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max">{t.maxLabel}</Label>
              <Input
                id="max"
                type="number"
                value={maxNum}
                onChange={(e) => setMaxNum(parseInt(e.target.value) || 100)}
                disabled={isDrawing}
              />
            </div>
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
            disabled={isDrawing}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg"
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
