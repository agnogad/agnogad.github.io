import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://agnogad.github.io',
  integrations: [
    expressiveCode({
      themes: ['dracula', 'github-light'],
      useThemedSelection: false,
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderColor: 'var(--color-code-border)',
        frames: {
          shadowColor: 'transparent',
        },
      },
    }),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
