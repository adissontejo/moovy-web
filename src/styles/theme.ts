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
      fontSize: 25,
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      default: '#DCE0E2',
    },
    primary: {
      main: '#F2911B',
    },
  },
});
