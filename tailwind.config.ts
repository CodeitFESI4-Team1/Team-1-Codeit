import { plugin } from 'postcss';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 컴포넌트 경로
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 설정 경로
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        // => @media (min-width: 360px) { ... }

        md: '744px',
        // => @media (min-width: 744px) { ... }

        lg: '1200px',
        // => @media (min-width: 1200px) { ... }
      },
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      boxShadow: {
        xl: '0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      width: {
        '1/10': '10%',
      },
    },
  },
  plugins: [
    plugin(
      ({
        addComponents,
        theme,
      }: {
        addComponents: (components: Record<string, unknown>) => void;
        theme: (path: string) => unknown;
      }) => {
        addComponents({
          // main text -  pretendard
          // 3xl
          '.typo-3xl-bold': {
            fontSize: theme('fontSize.30'),
            lineHeight: theme('lineHeight.36'),
            fontWeight: theme('fontWeight.bold'),
          },
          '.typo-3xl-semibold': {
            fontSize: theme('fontSize.30'),
            lineHeight: theme('lineHeight.36'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-3xl-medium': {
            fontSize: theme('fontSize.30'),
            lineHeight: theme('lineHeight.36'),
            fontWeight: theme('fontWeight.medium'),
          },
          '.typo-3xl-normal': {
            fontSize: theme('fontSize.30'),
            lineHeight: theme('lineHeight.36'),
            fontWeight: theme('fontWeight.normal'),
          },
          '.typo-3xl-light': {
            fontSize: theme('fontSize.30'),
            lineHeight: theme('lineHeight.36'),
            fontWeight: theme('fontWeight.light'),
          },
          // 2xl
          '.typo-2xl-bold': {
            fontSize: theme('fontSize.24'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.bold'),
          },
          '.typo-2xl-semibold': {
            fontSize: theme('fontSize.24'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-2xl-medium': {
            fontSize: theme('fontSize.24'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.medium'),
          },
          '.typo-2xl-regular': {
            fontSize: theme('fontSize.24'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.normal'),
          },
          // xl
          '.typo-xl-semibold': {
            fontSize: theme('fontSize.20'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-xl-medium': {
            fontSize: theme('fontSize.20'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.medium'),
          },
          '.typo-xl-regular': {
            fontSize: theme('fontSize.20'),
            lineHeight: theme('lineHeight.32'),
            fontWeight: theme('fontWeight.normal'),
          },
          // 2lg
          '.typo-2lg-bold': {
            fontSize: theme('fontSize.18'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.bold'),
          },
          '.typo-2lg-semibold': {
            fontSize: theme('fontSize.18'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-2lg-medium': {
            fontSize: theme('fontSize.18'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.medium'),
          },
          '.typo-2lg-regular': {
            fontSize: theme('fontSize.18'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.normal'),
          },
          // lg
          '.typo-lg-semibold': {
            fontSize: theme('fontSize.16'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-lg-medium': {
            fontSize: theme('fontSize.16'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.medium'),
          },
          '.typo-lg-regular': {
            fontSize: theme('fontSize.16'),
            lineHeight: theme('lineHeight.26'),
            fontWeight: theme('fontWeight.normal'),
          },
          // md
          '.typo-md-bold': {
            fontSize: theme('fontSize.14'),
            lineHeight: theme('lineHeight.24'),
            fontWeight: theme('fontWeight.bold'),
          },
          '.typo-md-semibold': {
            fontSize: theme('fontSize.14'),
            lineHeight: theme('lineHeight.24'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-md-medium': {
            fontSize: theme('fontSize.14'),
            lineHeight: theme('lineHeight.24'),
            fontWeight: theme('fontWeight.medium'),
          },
          '.typo-md-regular': {
            fontSize: theme('fontSize.14'),
            lineHeight: theme('lineHeight.24'),
            fontWeight: theme('fontWeight.normal'),
          },
          // sm
          '.typo-sm-medium': {
            fontSize: theme('fontSize.13'),
            lineHeight: theme('lineHeight.22'),
            fontWeight: theme('fontWeight.medium'),
          },
          // xs
          '.typo-xs-semibold': {
            fontSize: theme('fontSize.12'),
            lineHeight: theme('lineHeight.20'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.typo-xs-regular': {
            fontSize: theme('fontSize.12'),
            lineHeight: theme('lineHeight.18'),
            fontWeight: theme('fontWeight.normal'),
          },
        });
      },
    ),
  ],
};
export default config;
