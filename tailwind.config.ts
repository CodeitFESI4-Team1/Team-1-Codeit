import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 컴포넌트 경로
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 설정 경로
    './stories/**/*.{js,ts,jsx,tsx}',
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
      maxWidth: {
        pc: '1200px',
      },
      minWidth: {
        ic: 'calc(11.11111% - 7.1111px)',
      },
      width: {
        7.5: '30px',
        12.5: '50px',
      },
      padding: {
        7.5: '30px',
        12.5: '50px',
      },
      margin: {
        7.5: '30px',
        12.5: '50px',
      },
      gap: {
        7.5: '30px',
        12.5: '50px',
      },
      translate: {
        17: '68px',
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
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3388FF',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
      },
      boxShadow: {
        xl: '0 4px 4px 0 rgba(0,0,0,0.25)',
        bg: '0 4px 30px 1px rgba(0,122,255,0.04)',
      },
    },
  },
  plugins: [
    plugin(
      ({
        addComponents,
      }: {
        addComponents: (components: CSSRuleObject | CSSRuleObject[]) => void;
      }) => {
        addComponents({
          // main text -  pretendard
          // 4xl
          '.typo-4xl-semibold': {
            fontSize: '2rem',
            lineHeight: '3rem',
            fontWeight: 'semibold',
          },
          // 3xl
          '.typo-3xl-bold': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: '700',
          },
          '.typo-3xl-semibold': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: '600',
          },
          '.typo-3xl-medium': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: '500',
          },
          '.typo-3xl-normal': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: '400',
          },
          '.typo-3xl-light': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: '300',
          },
          // 2xl
          '.typo-2xl-bold': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '700',
          },
          '.typo-2xl-semibold': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '600',
          },
          '.typo-2xl-medium': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '500',
          },
          '.typo-2xl-normal': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '400',
          },
          '.typo-2xl-light': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '300',
          },
          // xl
          '.typo-xl-bold': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
          '.typo-xl-semibold': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
          '.typo-xl-medium': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
          '.typo-xl-normal': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
          '.typo-xl-light': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: '300',
          },
          // lg
          '.typo-lg-bold': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
          '.typo-lg-semibold': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
          '.typo-lg-medium': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
          '.typo-lg-normal': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
          '.typo-lg-light': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: '300',
          },
          // base
          '.typo-base-bold': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
          '.typo-base-semibold': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '600',
          },
          '.typo-base-medium': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '500',
          },
          '.typo-base-normal': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
          '.typo-base-light': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '300',
          },
          // sm
          '.typo-sm-bold': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: '700',
          },
          '.typo-sm-semibold': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: '600',
          },
          '.typo-sm-medium': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: '500',
          },
          '.typo-sm-normal': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
          '.typo-sm-light': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: '300',
          },
          // xs
          '.typo-xs-bold': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: '700',
          },
          '.typo-xs-semibold': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: '600',
          },
          '.typo-xs-medium': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: '500',
          },
          '.typo-xs-normal': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: '400',
          },
          '.typo-xs-light': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: '300',
          },
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          },
          '.snap-align-start': {
            'scroll-snap-align': 'start',
          },
          '.sort-bg': {
            'background-image': "url('./assets/icons/ic-sort.svg')",
            'background-repeat': 'no-repeat',
            'background-position': '12px center',
            'background-size': '24px 24px',
          },
          '.sort-bg-on': {
            'background-image': "url('./assets/icons/ic-sort-on.svg')",
            'background-repeat': 'no-repeat',
            'background-position': '12px center',
            'background-size': '24px 24px',
          },
        });
      },
    ),
  ],
};
export default config;
