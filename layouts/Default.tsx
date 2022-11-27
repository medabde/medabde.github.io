import Head from 'next/head';
import { ReactNode, useContext } from 'react';
import useMe from '../content/_me';
import AppContext from '../utils/AppContext';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  const { isPageNotFound } = useContext(AppContext);
  const { nickname } = useMe();

  return (
    <div className="dark:bg-palette-dark-primary">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>{nickname}</title>
      </Head>
      {!isPageNotFound && <NavBar />}
      <div className="min-h-screen">{children}</div>
      {!isPageNotFound && <Footer />}
    </div>
  );
};
export default DefaultLayout;
