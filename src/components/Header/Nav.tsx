import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

export interface NavProps {
  children: string;
  path: string;
}

export const Nav = ({ children, path }: NavProps) => {
  const { pathname } = useLocation();

  return (
    <Typography
      variant="h3"
      component="nav"
      color={pathname === path ? 'primary.main' : 'black'}
    >
      <Link to={path}>{children}</Link>
    </Typography>
  );
};
