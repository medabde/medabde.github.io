import { ReactNode } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
