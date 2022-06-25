import { createContext } from 'react';

type Context = {
  isDark: boolean;
  toggleDark: Function;
};

const AppContext = createContext({} as Context);

export default AppContext;
