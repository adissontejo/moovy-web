import React from 'react';
import { Grid, Typography } from '@mui/material';

export const Library = () => {
  return (
    <Grid container maxWidth="md" direction="row">
      <Grid item xs={12}>
        <Typography variant="subtitle1" component="h3">
          My Library
        </Typography>
      </Grid>
    </Grid>
  );
};
