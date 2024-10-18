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
    '<THIRD_PARTY_MODULES>',
    '^@/src/apis/(.*)$',
    '^@/src/hooks/(.*)$',
    '^@/src/app/(.*)$',
    '^@/src/components/(.*)$',
    '^@/src/types/(.*)$',
    '^@/src/styles/(.*)$',
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^@/public/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,

  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],

  tailwindConfig: './tailwind.config.ts',
};
