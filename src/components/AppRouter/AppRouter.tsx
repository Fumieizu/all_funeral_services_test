import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoutesMap } from '../../common/const';
import { Market } from '../../pages/Market';
import { NotFoundPage } from '../../pages/NotFoundPage';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutesMap.Market} element={<Market />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
