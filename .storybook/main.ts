import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack', // Add this line only if you are not using Vite
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      method: 'alphabetical',

      storySort: {},
    },
  },
};

export default config;
