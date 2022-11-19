import { ReactNode } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  const isPageNotFound = children?.type?.key === '404';

  return (
    <div>
      {!isPageNotFound && <NavBar />}
      <div className="min-h-screen">{children}</div>
      {!isPageNotFound && <Footer />}
    </div>
  );
};
export default DefaultLayout;
