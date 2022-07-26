import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoutesMap } from '../../common/const';
import { Market } from '../../pages/Market';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

export const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={RoutesMap.Market} element={<Market />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
