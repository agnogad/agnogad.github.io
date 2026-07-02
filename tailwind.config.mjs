/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: {
          primary: 'var(--color-bg)',
          secondary: 'var(--color-bg-secondary)',
          surface: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          light: 'var(--color-border-light)',
        },
        text: {
          primary: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          dim: 'var(--color-accent-dim)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            maxWidth: '72ch',
            '--tw-prose-body': 'var(--color-text)',
            '--tw-prose-headings': 'var(--color-text)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-bold': 'var(--color-text)',
            '--tw-prose-code': 'var(--color-text)',
            '--tw-prose-pre-bg': 'var(--color-code-bg)',
            '--tw-prose-pre-border': 'var(--color-code-border)',
            '--tw-prose-quotes': 'var(--color-text-secondary)',
            '--tw-prose-quote-borders': 'var(--color-accent)',
            '--tw-prose-hr': 'var(--color-border)',
            '--tw-prose-th-borders': 'var(--color-border)',
            '--tw-prose-td-borders': 'var(--color-border-light)',
            '--tw-prose-captions': 'var(--color-text-muted)',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            a: {
              color: 'var(--color-accent)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--color-accent-hover)',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.sans'),
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            h1: { fontSize: '2.25rem', marginTop: '2.5rem', marginBottom: '1rem' },
            h2: { fontSize: '1.75rem', marginTop: '2rem', marginBottom: '0.75rem' },
            h3: { fontSize: '1.375rem', marginTop: '1.5rem', marginBottom: '0.5rem' },
            code: {
              fontFamily: theme('fontFamily.mono'),
              fontSize: '0.875em',
              fontWeight: '400',
              backgroundColor: 'var(--color-code-inline-bg)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: 'var(--color-code-bg)',
              border: '1px solid var(--color-code-border)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.6',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '0.5rem',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '3px',
              borderLeftColor: 'var(--color-accent)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
