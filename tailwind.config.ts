import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 컴포넌트 경로
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 설정 경로
  ],
  theme: {
    extend: {},
    screens: {
      sm: '360px',
      // => @media (min-width: 360px) { ... }

      md: '744px',
      // => @media (min-width: 744px) { ... }

      lg: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
};
export default config;
