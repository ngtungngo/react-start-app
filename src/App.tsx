import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './containers/Dashboard';
import { Reports } from './containers/Reports';
import { MainContainer } from './globalstyles';

export const App = () => {
  const getBasename = (path) => path.substr(0, path.lastIndexOf('/'));
  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="reports/*" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
};