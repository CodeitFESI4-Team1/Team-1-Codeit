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
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      boxShadow: {
        xl: '0 4px 4px 0 rgba(0,0,0,0.25)',
      },
      minWidth: {
        ic: 'calc(11.11111% - 7.1111px)',
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
        });
      },
    ),
  ],
};
export default config;
