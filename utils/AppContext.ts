import { createContext } from 'react';

type Context = {
  isDark: boolean;
  toggleDark: Function;
  isPageNotFound: boolean;
  setPageNotFound: Function;
};

const AppContext = createContext({} as Context);

export default AppContext;
