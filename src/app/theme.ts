// src/theme.ts
import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

const themeOverride = createTheme({
  fontFamily: 'Pretendard',
  // ... other theme override properties
  breakpoints: {
    sm: '360px',
    md: '744px',
    lg: '1200px',
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
