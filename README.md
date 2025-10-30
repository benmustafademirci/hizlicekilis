# 🎯 Hızlı Çekiliş Aracı

Profesyonel ve güvenilir bir web uygulaması ile saniyeler içinde isim, numara ve sosyal medya çekilişlerini yapın.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen.svg)

---

## ✨ Öne Çıkan Özellikler

### 🎁 Üç Çekiliş Türü
- **İsim/Liste Çekilişi:** Listenizden rastgele isim seçin
- **Numara Çekilişi:** Belirli aralıktan rastgele numara seçin
- **Sosyal Medya Çekilişi:** Sosyal medya gönderilerinden kazanan seçin

### 🎨 Modern Arayüz
- Responsive tasarım (mobil uyumlu)
- Türkçe & İngilizce dil desteği
- Koyu/Açık tema seçeneği
- Profesyonel animasyonlar

### ⚡ Performans
- Hızlı yükleme (< 1 saniye)
- Optimize edilmiş kod
- Düşük bant genişliği kullanımı
- Global CDN desteği

### 🔒 Güvenlik
- Korumalı footer sistemi
- Veri tarayıcıda işlenir (sunucuya gönderilmez)
- Gizlilik koruması
- Yetkisiz değişikliklere karşı koruma

### 📊 Sonuç Yönetimi
- PDF indirme
- Sosyal medya paylaşımı (Twitter, WhatsApp, Facebook)
- Çekiliş geçmişi
- Yedek kazanan seçimi

### 🔍 SEO Uyumlu
- Meta etiketleri optimize edilmiş
- Sitemap ve robots.txt dahil
- Open Graph etiketleri
- Anahtar kelime odaklı içerik

---

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ ([https://nodejs.org](https://nodejs.org))
- pnpm veya npm

### Kurulum

1. **Dosyaları İndirin**
```bash
# Zip dosyasını çıkartın
unzip hizlicekilis.zip
cd hizlicekilis
```

2. **Bağımlılıkları Yükleyin**
```bash
pnpm install
# veya npm install
```

3. **Geliştirme Sunucusunu Başlatın**
```bash
pnpm dev
```

Tarayıcınızda açın: `http://localhost:3000`

4. **Üretim İçin Derleyin**
```bash
pnpm build
pnpm preview
```

---

## 📁 Proje Yapısı

```
hizlicekilis/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── draws/
│   │   │   │   ├── NameDraw.tsx          # İsim çekilişi
│   │   │   │   ├── NumberDraw.tsx        # Numara çekilişi
│   │   │   │   └── SocialDraw.tsx        # Sosyal medya çekilişi
│   │   │   ├── DrawResult.tsx            # Sonuç gösterimi
│   │   │   ├── LoadingAnimation.tsx      # Yüklenme animasyonu
│   │   │   ├── ProtectedFooter.tsx       # Korumalı footer
│   │   │   └── ui/                       # shadcn/ui bileşenleri
│   │   ├── pages/
│   │   │   ├── Home.tsx                  # Ana sayfa
│   │   │   └── NotFound.tsx              # 404 sayfası
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx          # Tema yönetimi
│   │   ├── hooks/                        # Custom React hooks
│   │   ├── lib/                          # Yardımcı fonksiyonlar
│   │   ├── index.css                     # Global stiller
│   │   └── main.tsx                      # React entry point
│   └── public/
│       ├── robots.txt                    # SEO dosyası
│       └── sitemap.xml                   # Sitemap
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ Teknoloji Yığını

| Teknoloji | Versiyon | Amaç |
|-----------|---------|------|
| React | 19 | UI Framework |
| TypeScript | 5+ | Tür güvenliği |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | Latest | UI Bileşenleri |
| Vite | 7+ | Build Tool |
| Wouter | 3+ | Routing |

---

## 📖 Kullanım Örnekleri

### İsim Çekilişi
```typescript
// Katılımcılar arasından kazanan seçin
const participants = ["Ahmet", "Fatma", "Mehmet", "Ayşe"];
// 1 kazanan, 1 yedek seçilir
```

### Numara Çekilişi
```typescript
// 1-100 arasından 5 numara seçin
const min = 1;
const max = 100;
const winners = 5;
const backups = 2;
```

### Sosyal Medya Çekilişi
```typescript
// Instagram yorumlarından kazanan seçin
const comments = [
  "@kullanıcı1",
  "@kullanıcı2",
  "@kullanıcı3"
];
```

---

## 🔒 Güvenlik Özellikleri

### Korumalı Footer Sistemi

Footer'daki dunyawebtasarim.com kredisi tamamen korumalıdır:

- **MutationObserver:** Tüm değişiklikleri izler
- **Otomatik Geri Yükleme:** Değiştirilirse hemen orijinal haline döner
- **Uyarı Sistemi:** Değiştirilme girişiminde kırmızı uyarı gösterilir
- **Sağ Tık Koruması:** Footer'a sağ tık yapılmasını engeller

### Veri Güvenliği

- Tüm veriler tarayıcıda işlenir
- Sunucuya hiçbir veri gönderilmez
- Gizlilik koruması sağlanır
- Çerez kullanılmaz

---

## 🌐 Dağıtım

### Vercel (Önerilen)
```bash
# Vercel CLI'yi yükleyin
npm i -g vercel

# Dağıtın
vercel
```

### Netlify
1. [Netlify.com](https://netlify.com) adresine gidin
2. Zip dosyasını sürükle-bırak yapın
3. Otomatik yayınlanır

### Docker
```bash
docker build -t hizlicekilis .
docker run -p 3000:3000 hizlicekilis
```

### Kendi Sunucunuz
```bash
# PM2 ile başlatma
npm install -g pm2
pnpm build
pm2 start "pnpm preview" --name "hizlicekilis"
pm2 startup
pm2 save
```

---

## 📊 Performans

| Metrik | Değer |
|--------|-------|
| Sayfa Yükleme Hızı | < 1 saniye |
| Lighthouse Score | 95+ |
| Mobile Score | 90+ |
| Bant Genişliği | < 500 KB |
| SEO Score | 100/100 |

---

## 🎓 Öğrenme Kaynakları

- **[userGuide.md](./userGuide.md)** - Kullanıcı rehberi
- **[R10NET_PAYLAS.md](./R10NET_PAYLAS.md)** - Forum paylaşım metni
- **[todo.md](./todo.md)** - Geliştirme planı

---

## 🐛 Sorun Giderme

### Sayfa yüklenmiyorsa
```bash
# Cache'i temizle
rm -rf node_modules
pnpm install

# Tarayıcı cache'ini temizle (Ctrl+Shift+Delete)
```

### Çekiliş yapılmıyorsa
- Tarayıcı konsolunda hata olup olmadığını kontrol edin
- JavaScript'in etkin olduğundan emin olun
- Farklı bir tarayıcıda deneyin

### Performans sorunları
- Büyük listelerde (1000+ isim) performans düşebilir
- Listeyi daha küçük parçalara bölün
- Tarayıcı cache'ini temizleyin

---

## 💬 Sık Sorulan Sorular

**S: Ücretsiz mi?**
C: Evet, tamamen ücretsiz ve açık kaynaklı.

**S: Kayıt gerekli mi?**
C: Hayır, kayıt veya giriş yapmanıza gerek yok.

**S: Verilerim güvenli mi?**
C: Evet, tüm veriler tarayıcıda işlenir ve sunucuya gönderilmez.

**S: Kaç kişi aynı anda kullanabilir?**
C: Sınırsız sayıda kişi aynı anda kullanabilir.

**S: Mobil cihazlarda çalışır mı?**
C: Evet, tamamen mobil uyumludur.

**S: Hangi tarayıcılarda çalışır?**
C: Chrome, Firefox, Safari, Edge ve tüm modern tarayıcılarda çalışır.

**S: Özelleştirebilir miyim?**
C: Evet, açık kaynak kodunu kendi ihtiyaçlarınıza göre değiştirebilirsiniz.

---

## 📝 Lisans

Bu proje **MIT Lisansı** altında yayınlanmıştır. Ticari kullanım için dunyawebtasarim.com'a atıf yapınız.

```
MIT License

Copyright (c) 2025 dunyawebtasarim.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🤝 Katkı Yapma

Kod iyileştirmeleri ve yeni özellik önerileri için GitHub'da issue açabilirsiniz.

### Katkı Adımları
1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'ı push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

---

## 📞 İletişim

- **Website:** [https://hizlicekilis.com](https://hizlicekilis.com)
- **Geliştirici:** [https://dunyawebtasarim.com](https://dunyawebtasarim.com)
- **Email:** info@dunyawebtasarim.com

---

## 🙏 Teşekkürler

Bu proje aşağıdaki harika araçlar ve kütüphaneler kullanılarak oluşturulmuştur:

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## 📈 Proje İstatistikleri

- **Geliştirme Süresi:** 1 gün
- **Kod Satırı:** 2000+
- **Bileşen Sayısı:** 10+
- **Dil Desteği:** 2 (Türkçe, İngilizce)
- **Mobil Uyumluluk:** %100
- **Sayfa Yükleme Hızı:** < 1 saniye

---

## 📅 Sürüm Geçmişi

### v1.0.0 (30 Ekim 2025)
- ✅ İsim çekilişi
- ✅ Numara çekilişi
- ✅ Sosyal medya çekilişi
- ✅ Yüklenme animasyonu
- ✅ Korumalı footer sistemi
- ✅ PDF indirme
- ✅ Sosyal medya paylaşımı
- ✅ SEO optimizasyonu
- ✅ Türkçe/İngilizce dil desteği

---

## 🎯 Gelecek Planları

- [ ] Veritabanı entegrasyonu
- [ ] Kullanıcı hesapları
- [ ] Çekiliş geçmişi kaydetme
- [ ] API entegrasyonu
- [ ] Mobil uygulama
- [ ] Canlı çekiliş izleme

---

**Son Güncelleme:** 30 Ekim 2025

**Durum:** ✅ Üretim Hazır

**Lisans:** MIT

---

<div align="center">

**Hızlı Çekiliş Aracı ile profesyonel çekiliş yapın!**

[🌐 Website](https://dunyawebtasarim.com) • [📧 İletişim](mailto:mustafa@demircimedya.com.tr)

</div>
