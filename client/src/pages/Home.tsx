import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Share2, Download } from "lucide-react";
import { APP_TITLE } from "@/const";
import NameDraw from "@/components/draws/NameDraw";
import NumberDraw from "@/components/draws/NumberDraw";
import SocialDraw from "@/components/draws/SocialDraw";

type DrawType = "name" | "number" | "social" | null;

export default function Home() {
  const [activeDrawType, setActiveDrawType] = useState<DrawType>(null);
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  const t = {
    tr: {
      title: "Hızlı Çekiliş Aracı",
      subtitle: "Profesyonel ve Güvenilir Çekiliş Çözümü",
      description: "İsim, numara veya sosyal medya çekilişlerini saniyeler içinde gerçekleştirin.",
      nameDraw: "İsim Çekilişi",
      numberDraw: "Numara Çekilişi",
      socialDraw: "Sosyal Medya Çekilişi",
      drawDesc: "Listenizden rastgele isim seçin",
      numberDesc: "Belirtilen aralıktan rastgele numara seçin",
      socialDesc: "Sosyal medya gönderilerinden kazanan seçin",
      features: "Özellikler",
      feature1: "Anlık Sonuç",
      feature1Desc: "Çekilişi saniyeler içinde tamamlayın",
      feature2: "Paylaşılabilir",
      feature2Desc: "Sonuçları sosyal medyada paylaşın",
      feature3: "Indirilebilir",
      feature3Desc: "Sonuçları PDF olarak indirin",
      feature4: "Güvenilir",
      feature4Desc: "Tamamen rastgele ve adil seçim",
      backHome: "Ana Sayfaya Dön",
    },
    en: {
      title: "Quick Draw Tool",
      subtitle: "Professional and Reliable Draw Solution",
      description: "Conduct name, number, or social media draws in seconds.",
      nameDraw: "Name Draw",
      numberDraw: "Number Draw",
      socialDraw: "Social Media Draw",
      drawDesc: "Select random names from your list",
      numberDesc: "Select random number from specified range",
      socialDesc: "Select winner from social media posts",
      features: "Features",
      feature1: "Instant Results",
      feature1Desc: "Complete draws in seconds",
      feature2: "Shareable",
      feature2Desc: "Share results on social media",
      feature3: "Downloadable",
      feature3Desc: "Download results as PDF",
      feature4: "Reliable",
      feature4Desc: "Completely random and fair selection",
      backHome: "Back to Home",
    },
  };

  const texts = t[language];

  if (activeDrawType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">{APP_TITLE}</h1>
            <div className="flex gap-2">
              <Button
                variant={language === "tr" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("tr")}
              >
                TR
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
              >
                EN
              </Button>
            </div>
          </div>
        </header>

        {/* Draw Component */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {activeDrawType === "name" && <NameDraw language={language} />}
          {activeDrawType === "number" && <NumberDraw language={language} />}
          {activeDrawType === "social" && <SocialDraw language={language} />}

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setActiveDrawType(null)}
              className="px-6"
            >
              {texts.backHome}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">{APP_TITLE}</h1>
          <div className="flex gap-2">
            <Button
              variant={language === "tr" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("tr")}
            >
              TR
            </Button>
            <Button
              variant={language === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("en")}
            >
              EN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto text-orange-500 mb-4" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {texts.title}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {texts.subtitle}
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          {texts.description}
        </p>
      </section>

      {/* Draw Types */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Name Draw Card */}
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow hover:border-blue-500"
            onClick={() => setActiveDrawType("name")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Zap className="w-5 h-5" />
                {texts.nameDraw}
              </CardTitle>
              <CardDescription>{texts.drawDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                {texts.nameDraw}
              </Button>
            </CardContent>
          </Card>

          {/* Number Draw Card */}
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow hover:border-orange-500"
            onClick={() => setActiveDrawType("number")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <Zap className="w-5 h-5" />
                {texts.numberDraw}
              </CardTitle>
              <CardDescription>{texts.numberDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                {texts.numberDraw}
              </Button>
            </CardContent>
          </Card>

          {/* Social Draw Card */}
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow hover:border-purple-500"
            onClick={() => setActiveDrawType("social")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Zap className="w-5 h-5" />
                {texts.socialDraw}
              </CardTitle>
              <CardDescription>{texts.socialDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                {texts.socialDraw}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {texts.features}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">
                {texts.feature1}
              </h4>
              <p className="text-gray-600 text-sm">{texts.feature1Desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">
                {texts.feature2}
              </h4>
              <p className="text-gray-600 text-sm">{texts.feature2Desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">
                {texts.feature3}
              </h4>
              <p className="text-gray-600 text-sm">{texts.feature3Desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">
                {texts.feature4}
              </h4>
              <p className="text-gray-600 text-sm">{texts.feature4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p>&copy; 2025 {APP_TITLE}. All rights reserved.</p>
          </div>
          <div className="text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
            <p>Bu script <a href="https://dunyawebtasarim.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">dunyawebtasarim.com</a> tarafından yapılmıştır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
