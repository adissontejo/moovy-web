import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Library, Search } from '~/pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};
