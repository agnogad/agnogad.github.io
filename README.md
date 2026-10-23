# Agnogad

Bilim, felsefe ve psikoloji üzerine kişisel yazılar. Site, Rust ile yazılmış
tek binary'lik statik site üreteci [agno](https://github.com/agnogad/agno) ile
üretilir; Node.js, paket yöneticisi veya çalışma zamanı bağımlılığı yoktur.

## Özellikler

- Açık/koyu tema; tema tercihi `localStorage` içinde saklanır.
- Mobil alt gezinme çubuğu ve masaüstü üst menü.
- Etiket sayfaları, etiket dizini ve yazı sayfalarında etiket bağlantıları.
- Statik `search-index.json` üzerinden Türkçe karakter destekli arama.
- RSS akışı (`/rss.xml`), site haritası (`/sitemap.xml`) ve `404.html`.
- `syntect` ile sunucu tarafında kod vurgulama ve kopyalama düğmesi.
- İsteğe bağlı KaTeX desteği (`math: true` frontmatter alanı).
- Okuma süresi, Türkçe tarih biçimi ve okuma ilerleme çubuğu.
- Erişilebilir odak durumları, semantik HTML ve Open Graph/Twitter meta etiketleri.

## Gereksinimler

- Rust 1.85 veya üstü
- Derleme sırasında bir C araç zinciri (`cc`, MSVC veya Xcode)

`agno` kaynak koddan kurulur; siteyi üretmek için başka bir bağımlılık gerekmez.

## Geliştirme

`agno`'yu GitHub'dan kurun:

```bash
cargo install --git https://github.com/agnogad/agno --locked
```

Yerel bir agno kopyasıyla çalışıyorsanız:

```bash
cargo install --path ../agno
```

Ardından:

```bash
agno dev
```

Geliştirme sunucusu <http://localhost:1111> adresinde açılır. `content/`,
`templates/` ve `static/` altındaki değişiklikler yeniden derlenir.

Üretim çıktısı:

```bash
agno build
```

Statik dosyalar `dist/` altına yazılır. `dist/` sürüm kontrolüne dahil edilmez.

## Proje yapısı

```text
.
├── agno.toml              # site başlığı, menü, dil, arama ayarı
├── content/
│   ├── _index.md          # anasayfa
│   ├── about.md           # hakkında
│   ├── tags.md            # etiket dizini
│   └── posts/
│       ├── _index.md      # /posts/ listesi
│       └── *.md           # yazılar
├── templates/
│   ├── base.html          # ortak kabuk
│   ├── index.html         # anasayfa
│   ├── page.html          # yazı düzeni
│   ├── section.html       # bölüm listesi
│   ├── tag.html           # tek etiket listesi
│   ├── tags.html          # etiket dizini
│   ├── about.html         # hakkında düzeni
│   ├── 404.html
│   └── _*.html            # parçalar
├── static/
│   ├── style.css
│   ├── app.js
│   └── favicon.svg
└── .github/workflows/deploy.yml
```

## Yazı ekleme

`content/posts/` altında bir Markdown dosyası oluşturun. Dosya adı URL'yi
belirler: `yeni-yazi.md` → `/posts/yeni-yazi/`.

```yaml
---
title: "Yazı Başlığı"
date: 2026-07-02T14:46:49+04:00
description: "Listelerde ve meta etiketlerinde görünen kısa açıklama."
tags: ["Bilinç", "Nörobilim"]
draft: false
# math: true   # KaTeX'i yalnızca bu yazı için yükle
---

## Giriş

Markdown içerik buraya gelir.
```

- `draft: true` olan yazılar normal derlemede atlanır; `agno build --drafts`
  ile dahil edilebilir.
- `date` alanı sıralama, RSS ve okuma süresi için kullanılır.
- Etiketler otomatik olarak `/tags/<slug>/` sayfalarına dönüşür.
- `math: true` yalnızca gerektiğinde KaTeX CDN dosyalarını yükler.

## Dağıtım

`main` dalına yapılan her push, GitHub Actions üzerinden siteyi üretir ve
GitHub Pages'e yayınlar. İş akışı agno'yu sabitlenmiş bir commit'ten derler:

```bash
cargo install --git https://github.com/agnogad/agno \
  --rev dd26606f31d7fea1f4c9b32b0848317aef30c688 --locked
agno build
```

Yayınlanan site: <https://agnogad.github.io>

## Lisans

[MIT](LICENSE)
