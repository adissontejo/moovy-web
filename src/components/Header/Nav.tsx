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
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Typography
        variant="h3"
        color={pathname === path ? 'text.primary' : 'black'}
      >
        {children}
      </Typography>
    </Link>
  );
};
