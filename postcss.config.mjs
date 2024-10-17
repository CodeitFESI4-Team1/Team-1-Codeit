/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '300px',
        'mantine-breakpoint-sm': '360px',
        'mantine-breakpoint-md': '744px',
        'mantine-breakpoint-lg': '1200px',
        'mantine-breakpoint-xl': '1920px',
      },
    },
  },
};

export default config;
