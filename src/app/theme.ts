// src/theme.ts
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Pretendard',
  // ... other theme override properties
  breakpoints: {
    sm: '360px',
    md: '744px',
    lg: '1200px',
  },
});
