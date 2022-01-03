import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './containers/Dashboard';
import { Reports } from './containers/Reports';
import { GlobalStyles, MainContainer } from './globalstyles';
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';

export const App = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean | undefined>(
      undefined
    );

  const getBasename = (path) => path.substr(0, path.lastIndexOf('/'));
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path="reports/*" element={<Reports />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
};