# Scientia — Scientific Blog

A dark-themed scientific blog built with [Astro](https://astro.build) and [Bun](https://bun.sh), designed for publishing technical and scientific articles with LaTeX math rendering and syntax-highlighted code blocks.

## Tech Stack

- **Astro 5** — Static site generator with content collections
- **Bun** — JavaScript runtime and package manager
- **Markdown** — Post content with frontmatter
- **KaTeX** — LaTeX math rendering (`remark-math` + `rehype-katex`)
- **Expressive Code** — Syntax highlighting for code blocks
- **Fuse.js** — Client-side full-text search
- **Tailwind CSS 3** — Utility-first CSS framework
- **@tailwindcss/typography** — Prose styling for blog content

## Features

- Dark theme with light/dark toggle (persisted to localStorage)
- Responsive layout (mobile, tablet, desktop)
- Content collections with typed frontmatter schema
- LaTeX math rendering (inline `$...$` and display `$$...$$`)
- Syntax-highlighted code blocks with line numbers and copy button
- Tag-based filtering and navigation
- Client-side search (Fuse.js)
- Auto-generated RSS feed (`/rss.xml`)
- Auto-generated sitemap (`/sitemap-index.xml`)
- Open Graph and Twitter Card meta tags for social sharing
- Semantic HTML for accessibility and SEO

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.0.0

### Install dependencies

```bash
bun install
```

### Start development server

```bash
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for production

```bash
bun run build
```

The static site is output to `dist/`.

### Preview production build

```bash
bun run preview
```

## Project Structure

```
agnogad.github.io/
├── public/                  # Static assets (favicon)
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── PostCard.astro
│   │   ├── SearchBar.astro
│   │   ├── SEO.astro
│   │   ├── TagChip.astro
│   │   └── ThemeToggle.astro
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── posts/           # Blog posts (Markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro # Main layout with theme, fonts, SEO
│   │   └── PostLayout.astro # Post-specific layout
│   ├── lib/
│   │   ├── constants.ts     # Site-wide configuration
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── index.astro      # Homepage with post listing
│   │   ├── about.astro      # About page
│   │   ├── 404.astro        # Custom 404 page
│   │   ├── posts/
│   │   │   └── [...slug].astro  # Dynamic post routes
│   │   ├── tags/
│   │   │   └── [tag].astro  # Tag-based listings
│   │   ├── rss.xml.ts       # RSS feed endpoint
│   │   └── search-index.json.ts  # Search index endpoint
│   ├── styles/
│   │   └── global.css       # Global styles and CSS variables
│   └── env.d.ts             # TypeScript declarations
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Writing Posts

Create a new `.md` file in `src/content/posts/` with frontmatter:

```yaml
---
title: "Your Post Title"
description: "A concise description for previews and SEO."
date: 2026-07-01
tags: ["topic-1", "topic-2"]
draft: false
---
```

Posts support:

- **LaTeX math:** Inline `$E = mc^2$` or display `$$\int_a^b f(x)\,dx$$`
- **Code blocks:** With language annotation for syntax highlighting

  ```python
  def hello():
      print("Hello, world!")
  ```

- **Images:** Standard Markdown image syntax with optional captions
- **Tables, blockquotes, lists:** Full GFM support

## Customization

Edit `src/lib/constants.ts` to update site title, description, author info, and navigation links.

The color scheme is defined via CSS custom properties in `src/styles/global.css`. The dark theme is the default; the `.light` class override provides the light theme.

## License

MIT
