import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

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
        xl: '0 10px 10px -5px rgba(0,0,0,0.04)',
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
            fontSize: '2.5rem',
            lineHeight: '3.25rem',
            fontWeight: 'semibold',
          },
          // 3xl
          '.typo-3xl-bold': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: 'bold',
          },
          '.typo-3xl-semibold': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: 'semibold',
          },
          '.typo-3xl-medium': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: 'medium',
          },
          '.typo-3xl-normal': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: 'normal',
          },
          '.typo-3xl-light': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: 'light',
          },
          // 2xl
          '.typo-2xl-bold': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 'bold',
          },
          '.typo-2xl-semibold': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 'semibold',
          },
          '.typo-2xl-medium': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 'medium',
          },
          '.typo-2xl-normal': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 'normal',
          },
          '.typo-2xl-light': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 'light',
          },
          // xl
          '.typo-xl-bold': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
          },
          '.typo-xl-semibold': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'semibold',
          },
          '.typo-xl-medium': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'medium',
          },
          '.typo-xl-normal': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'normal',
          },
          '.typo-xl-light': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'light',
          },
          // lg
          '.typo-lg-bold': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
          },
          '.typo-lg-semibold': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 'semibold',
          },
          '.typo-lg-medium': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 'medium',
          },
          '.typo-lg-normal': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 'normal',
          },
          '.typo-lg-light': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontWeight: 'light',
          },
          // base
          '.typo-base-bold': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'bold',
          },
          '.typo-base-semibold': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'semibold',
          },
          '.typo-base-medium': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'medium',
          },
          '.typo-base-normal': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'normal',
          },
          '.typo-base-light': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'light',
          },
          // sm
          '.typo-sm-bold': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: 'bold',
          },
          '.typo-sm-semibold': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: 'semibold',
          },
          '.typo-sm-medium': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: 'medium',
          },
          '.typo-sm-normal': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: 'normal',
          },
          '.typo-sm-light': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: 'light',
          },
          // xs
          '.typo-xs-bold': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 'bold',
          },
          '.typo-xs-semibold': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 'semibold',
          },
          '.typo-xs-medium': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 'medium',
          },
          '.typo-xs-normal': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 'normal',
          },
          '.typo-xs-light': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 'light',
          },
        });
      },
    ),
  ],
};
export default config;
