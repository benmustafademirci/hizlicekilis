import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Share2, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface DrawResultProps {
  type: 'name' | 'number' | 'social';
  result: {
    winners: string[];
    backups: string[];
    timestamp: Date;
  };
  language: 'tr' | 'en';
  onReset: () => void;
}

const translations = {
  tr: {
    winners: 'Kazananlar',
    backups: 'Yedekler',
    noBackups: 'Yedek bulunmamaktadır',
    shareButton: 'Sosyal Medyada Paylaş',
    downloadButton: 'PDF İndir',
    resetButton: 'Yeni Çekiliş Yap',
    shareTwitter: 'Twitter\'da Paylaş',
    shareWhatsapp: 'WhatsApp\'ta Paylaş',
    shareFacebook: 'Facebook\'ta Paylaş',
  },
  en: {
    winners: 'Winners',
    backups: 'Backups',
    noBackups: 'No backups',
    shareButton: 'Share on Social Media',
    downloadButton: 'Download PDF',
    resetButton: 'New Draw',
    shareTwitter: 'Share on Twitter',
    shareWhatsapp: 'Share on WhatsApp',
    shareFacebook: 'Share on Facebook',
  },
};

export default function DrawResult({ type, result, language, onReset }: DrawResultProps) {
  const t = translations[language];

  const handleDownloadPDF = async () => {
    const element = document.getElementById('result-card');
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`cekilis-sonucu-${new Date().getTime()}.pdf`);
  };

  const handleShare = (platform: string) => {
    const text = `${t.winners}: ${result.winners.join(', ')}`;
    const url = window.location.href;

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <Card id="result-card" className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="text-green-700 text-2xl">{t.winners}</CardTitle>
          <CardDescription>Çekiliş Sonuçları</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Winners */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-gray-900">{t.winners}</h3>
            <div className="space-y-2">
              {result.winners.map((winner, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border-2 border-green-500 rounded-lg text-center text-lg font-bold text-green-700"
                >
                  {idx + 1}. {winner}
                </div>
              ))}
            </div>
          </div>

          {/* Backups */}
          {result.backups.length > 0 && (
            <div className="space-y-3 pt-4 border-t">
              <h3 className="font-bold text-lg text-gray-900">{t.backups}</h3>
              <div className="space-y-2">
                {result.backups.map((backup, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border border-orange-300 rounded-lg text-center text-sm text-orange-700"
                  >
                    {idx + 1}. {backup}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timestamp */}
          <div className="text-xs text-gray-500 text-center pt-4 border-t">
            {result.timestamp.toLocaleString(language === 'tr' ? 'tr-TR' : 'en-US')}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <Button
            onClick={() => handleShare('twitter')}
            className="flex-1 bg-blue-400 hover:bg-blue-500 text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {t.shareTwitter}
          </Button>
          <Button
            onClick={() => handleShare('whatsapp')}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {t.shareWhatsapp}
          </Button>
        </div>

        <Button
          onClick={handleDownloadPDF}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          {t.downloadButton}
        </Button>

        <Button
          onClick={onReset}
          variant="outline"
          className="w-full"
        >
          {t.resetButton}
        </Button>
      </div>
    </div>
  );
}
