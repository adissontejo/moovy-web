import React from 'react';
import { Stack } from '@mui/material';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <Stack
      direction="row"
      spacing={8}
      height={24}
      alignItems="center"
      marginBottom={4}
    >
      <Nav path="/">Search</Nav>
      <Nav path="/library">My Library</Nav>
    </Stack>
  );
};
