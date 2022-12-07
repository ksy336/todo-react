import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boards from '../pages/Boards';
import Columns from '../pages/Columns';
import Welcome from '../pages/Welcome';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boards" element={<Boards />} />
        <Route path="/columns" element={<Columns />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
