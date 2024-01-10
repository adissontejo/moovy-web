import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter',
    },
    h1: {
      fontSize: 30,
      fontWeight: 700,
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.5)',
    },
  },
  palette: {
    background: {
      default: '#DCE0E2',
    },
    text: {
      primary: '#F2911B',
      secondary: '#434670',
    },
    primary: {
      main: '#FE6D8E',
    },
    secondary: {
      main: '#0ACF83',
    },
    grey: {
      '100': '#868686',
      '200': '#A1A1A1',
    },
  },
});
