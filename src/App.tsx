import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './containers/Dashboard';
import { Reports } from './containers/Reports';
import { GlobalStyles} from './globalstyles';
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { DarkModeContext, MenuContext } from './hooks/hooks';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean | undefined>(
    undefined
  );
  const [currentPage, setCurrentPage] = React.useState<string | undefined>(
    'Typography'
  );

  React.useEffect(() => {
    const hadDarkMode = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(hadDarkMode);
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage) {
      setCurrentPage(currentPage);
    }
  }, []);

    const handleSetDarkMode = (isDarkMode) => {
      localStorage.setItem('isDarkMode', isDarkMode.toString());
      setIsDarkMode(isDarkMode);
    };

  const handleSetCurrentPage = (currentPage) => {
    localStorage.setItem('currentPage', currentPage);
    setCurrentPage(currentPage);
  };

  //const getBasename = (path) => path.substr(0, path.lastIndexOf('/'));
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode: handleSetDarkMode}}>
        <MenuContext.Provider
          value={{ currentPage, setCurrentPage: handleSetCurrentPage }}
        >
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path="reports/*" element={<Reports />} />
            </Routes>
          </BrowserRouter>
        </MenuContext.Provider>
        </DarkModeContext.Provider>
      </ThemeProvider>
    </>
  );
};
