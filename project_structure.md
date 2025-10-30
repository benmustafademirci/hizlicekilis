# HizliCekilis.com Proje Yapısı ve Tasarım Konsepti

## 1. Proje Yapısı (Dosya ve Dizinler)

```
/home/ubuntu/hizlicekilis/
├── public/
│   ├── index.php             # Ana sayfa ve yönlendirici (router)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css     # Ana stil dosyası (Tailwind CSS veya custom)
│   │   │   └── modern.css    # Modern tasarım için ek stiller
│   │   ├── js/
│   │   │   ├── main.js       # Ana JavaScript dosyası (çekiliş mantığı)
│   │   │   └── animations.js # Çekiliş animasyonları ve görsel efektler
│   │   └── img/              # Görsel varlıklar
│   ├── .htaccess             # SEO dostu URL'ler için yeniden yazma kuralları (mod_rewrite)
│   └── favicon.ico
├── src/
│   ├── Core/
│   │   ├── Router.php        # URL yönlendirme sınıfı
│   │   ├── Template.php      # Şablon motoru (HTML parçalarını yönetme)
│   │   └── Database.php      # Veritabanı bağlantı sınıfı (Gerekirse)
│   ├── Controllers/
│   │   ├── HomeController.php
│   │   ├── DrawController.php # Çekiliş mantığını yönetecek ana controller
│   │   └── SeoController.php  # SEO ile ilgili metotlar
│   ├── Models/
│   │   ├── DrawModel.php      # Çekiliş verilerini yönetecek model
│   │   └── ResultModel.php    # Sonuçları yönetecek model
│   ├── Views/
│   │   ├── layout/
│   │   │   ├── header.php    # Site üst kısmı (Navigasyon, Logo)
│   │   │   └── footer.php    # Site alt kısmı (SEO metinleri, Linkler)
│   │   ├── home.php          # Ana sayfa içeriği
│   │   ├── draw_name.php     # İsim çekilişi arayüzü
│   │   ├── draw_number.php   # Numara çekilişi arayüzü
│   │   ├── draw_social.php   # Sosyal medya çekilişi arayüzü
│   │   └── result.php        # Çekiliş sonuç sayfası
│   └── Algorithms/
│       ├── RandomPicker.php  # Temel rastgele seçici
│       └── SocialMediaPicker.php # Sosyal medya kurallarına özel seçici
├── vendor/                   # Composer bağımlılıkları (Gerekirse)
├── composer.json
├── composer.lock
└── README.md
```

## 2. Tasarım Konsepti: "Yeni Nesil ve Profesyonel"

**Genel Görünüm:**
*   **Minimalist ve Modern:** Gereksiz karmaşadan uzak, temiz çizgiler ve bol beyaz/negatif alan kullanımı.
*   **Hız Odaklı:** Yüksek performans ve hızlı yükleme süreleri (SEO için kritik).
*   **Mobil Öncelikli:** Tüm arayüz mobil cihazlara tam uyumlu (Responsive Design).

**Renk Paleti:**
*   **Ana Renk:** Güven ve heyecan veren, canlı bir mavi veya turkuaz tonu (`#007bff` veya daha modern bir ton).
*   **Vurgu Rengi:** Ana renkle kontrast oluşturan, enerji veren bir turuncu veya sarı (`#ffc107`).
*   **Arka Plan:** Temiz beyaz veya çok açık gri.
*   **Tipografi:** Okunabilirliği yüksek, modern sans-serif fontlar (örneğin: Inter, Poppins).

**Kullanıcı Deneyimi (UX):**
*   **Kolay Erişim:** Ana sayfada en popüler çekiliş türlerine (İsim, Numara, Sosyal Medya) büyük, dikkat çekici kartlar veya butonlarla hızlı erişim.
*   **Adım Adım Süreç:** Çekiliş oluşturma süreci basit, adım adım ilerleyen bir arayüzle sunulmalı.
*   **Canlı Animasyon:** Çekiliş anında kullanıcıyı heyecanlandıracak, akıcı ve profesyonel bir animasyon (kazananın yavaşça ortaya çıkması, confetti efektleri vb.).
*   **Sonuç Paylaşımı:** Çekiliş sonucu, sosyal medyada kolayca paylaşılabilecek, profesyonel görünümlü bir görsel veya PDF olarak indirme seçeneği sunulmalı.

## 3. SEO Yapılandırması

*   **URL Yapısı:** Kısa, açıklayıcı ve anahtar kelime içeren URL'ler (`/cekilis-yap`, `/isim-cekilisi`, `/numara-cekilisi`).
*   **Başlık Etiketleri:** Her sayfa için benzersiz, anahtar kelime odaklı ve dikkat çekici `<title>` etiketleri.
*   **Meta Açıklamalar:** Tıklama oranını (CTR) artıracak, çekici ve bilgilendirici meta açıklamalar.
*   **Hız:** Sayfa yükleme hızını maksimize etmek için optimize edilmiş görseller ve minimal CSS/JS kullanımı.
*   **İçerik:** Ana sayfada ve alt sayfalarda, çekiliş araçlarının faydalarını, nasıl kullanıldığını açıklayan, zengin ve kaliteli metin içerikleri (SEO metinleri).
*   **Schema Markup:** Çekiliş sonuçları için uygun Schema.org işaretlemeleri kullanılacak.

## 4. Çekiliş Modülleri (Özet)

1.  **İsim/Liste Çekilişi:**
    *   Giriş: Metin kutusuna alt alta isim/liste yapıştırma.
    *   Seçenekler: Yedek sayısı, kaç kişi seçileceği.
    *   Çıkış: Kazanan(lar) ve yedek(ler).
2.  **Numara Çekilişi:**
    *   Giriş: Minimum ve maksimum sayı aralığı belirleme.
    *   Seçenekler: Tekrar eden sayı olmasın, kaç kişi seçileceği.
    *   Çıkış: Rastgele sayı(lar).
3.  **Sosyal Medya Çekilişi (Konsept):**
    *   Giriş: Gönderi URL'si (şimdilik sadece simüle edilecek veya API entegrasyonu olmadan manuel yorum girişi ile test edilecek).
    *   Seçenekler: Yorum sayısı, etiket sayısı, yedek sayısı.
    *   Çıkış: Kazanan(lar) ve yedek(ler).

Bu yapı ve konsept, projenin "profesyonel ve yeni nesil" beklentisini karşılayacak sağlam bir temel oluşturmaktadır. Bir sonraki aşamada bu yapıya uygun olarak kodlamaya başlanacaktır.
