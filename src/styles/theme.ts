import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

const themeOverride = createTheme({
  fontFamily: 'var(--font-pretendard)',

  breakpoints: {
    sm: '360px',
    md: '744px',
    lg: '1200px',
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
