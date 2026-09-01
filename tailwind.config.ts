import type { Config } from 'tailwindcss'

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8000',
        'primary-container': '#ff9533',
        'on-primary': '#ffffff',
        background: '#ffffff',
        surface: '#ffffff',
        'on-surface': '#121414',
        'on-surface-variant': '#454747',
        'surface-container': '#f8f9fa',
        'surface-container-low': '#fafafa',
        'surface-container-high': '#f0f0f0',
        'outline-variant': '#e2e2e2',
        outline: '#727779',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
        body: ['var(--font-geist)', 'var(--font-outfit)', 'Geist', 'Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'title-md': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '700' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
      },
      spacing: {
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        'container-max': '1280px',
        gutter: '24px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config
