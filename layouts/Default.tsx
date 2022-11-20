import { ReactNode, useContext } from 'react';
import AppContext from '../utils/AppContext';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  const { isPageNotFound } = useContext(AppContext);

  return (
    <div className="dark:bg-palette-dark-primary">
      {!isPageNotFound && <NavBar />}
      <div className="min-h-screen">{children}</div>
      {!isPageNotFound && <Footer />}
    </div>
  );
};
export default DefaultLayout;
