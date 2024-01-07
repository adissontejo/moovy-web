import React from 'react';
import { Stack, ThemeProvider, Typography } from '@mui/material';

import '~/styles/global.css';

import { Header } from './components';
import { Router } from './routes';
import { theme } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        padding={4}
        direction="row"
        height="100vw"
        bgcolor="background.default"
      >
        <Stack marginRight={16} height={24} direction="row" alignItems="center">
          <Typography variant="h1" color="text.primary">
            Moovy
          </Typography>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <Header />
          <Router />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
