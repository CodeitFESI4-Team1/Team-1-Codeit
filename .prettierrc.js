module.exports = {
  arrowParens: 'always',
  endOfLine: 'lf',
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,

  importOrder: [
    '^next',
    '^react',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '^@/src/apis/(.*)$',
    '^@/src/hooks/(.*)$',
    '^@/src/app/(.*)$',
    '^@/src/components/(.*)$',
    '^@/src/styles/(.*)$',
    '^[./]',
    '^@/public/(.*)$',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  tailwindConfig: './tailwind.config.ts',
};
