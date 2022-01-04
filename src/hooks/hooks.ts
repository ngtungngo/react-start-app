import { createContext, useContext } from 'react';


export const DarkModeContext = createContext<{
  isDarkMode?: boolean;
  setIsDarkMode: (boolean: boolean) => void;
}>({
  isDarkMode: undefined,
  setIsDarkMode: () => {
    /*intentionally left blank*/
  },
});

export const useMode = () => {
  const { setIsDarkMode, isDarkMode } = useContext(DarkModeContext);

  return { setIsDarkMode, isDarkMode };
};


export const MenuContext = createContext<{
  currentPage?: string;
  setCurrentPage: (page: string) => void;
}>({
  currentPage: undefined,
  setCurrentPage: (string: string) => {},
});

export const useMenu = () => {
  const { setCurrentPage, currentPage } = useContext(MenuContext);

  return { setCurrentPage, currentPage };
};
