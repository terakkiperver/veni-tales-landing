# Veni Tales Landing Page

Çocuk hikaye uygulaması için modern, sıcak landing page. Next.js 15 + Tailwind + Plus Jakarta Sans + Fraunces.

## Cursor'a kurulum

```bash
# 1. Klasöre gir
cd veni-tales-landing

# 2. Bağımlılıkları yükle
npm install

# 3. Asset'leri yerleştir
# Logo'yu ve app icon'u public/ klasörüne koy:
# - public/logo.svg (veya .png)
# - public/icon.png

# 4. Dev server'ı başlat
npm run dev
# http://localhost:3000 adresinde açılır
```

## Asset yerleşimi

`public/` klasörüne şu dosyaları koy:

- `logo.svg` — Header'daki logo
- `icon.png` — App icon (favicon olarak da kullanılabilir)
- `og-image.png` — Open Graph paylaşım görseli (1200×630px, opsiyonel)

Sonra Hero.tsx ve Footer.tsx içindeki **logo placeholder div'lerini** Image component ile değiştir:

```tsx
// Mevcut placeholder:
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
  <span className="text-bg-cream font-display text-xl">V</span>
</div>

// Yerine:
<Image src="/logo.svg" alt="Veni Tales" width={40} height={40} />
```

## Eksikler — bunları sonra hallet

1. **Privacy Policy sayfası** — `/app/privacy/page.tsx`
2. **Terms of Service sayfası** — `/app/terms/page.tsx`
3. **Support sayfası** — `/app/support/page.tsx`
4. **App Store linki** — `apps.apple.com/app/venitales` placeholder, gerçek link ile değiştir
5. **OG image** — sosyal paylaşım için
6. **Sitemap & robots.txt** — SEO için
7. **Plausible/Umami analytics** — kullanıcı analitiği

## Vercel'e deploy

```bash
# Vercel CLI ile
npm i -g vercel
vercel --prod

# Veya GitHub'a push edip vercel.com'da bağla
```

## Renk paleti

```js
primary: "#03594d"        // Ana yeşil
primaryLight: "#04746a"   // Açık yeşil
accent: "#82eda6"         // CTA yeşili
accentLight: "#a8f2be"    // Açık accent
bgPink: "#fccddc"         // Pembe vurgu
yellow: "#fffd94"         // Sarı vurgu
purple: "#f6bbfd"         // Mor vurgu
cream: "#fdfaf3"          // Ana zemin
```
