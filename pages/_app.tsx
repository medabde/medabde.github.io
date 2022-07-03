import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/transitions/PageTransition';
import { useDarkMode } from '../hooks/darkMode';
import DefaultLayout from '../layouts/Default';
import '../styles/index.css';
import { LocaleKey } from '../types/locale';
import AppContext from '../utils/AppContext';
import { setUpInitialLang, isRtl } from '../utils/locales';

type Props = AppProps & {
  layout: string | null;
  Component: NextComponentType<NextPageContext, any, {}> & {
    Layout: FC | undefined;
  };
};

export default function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout || DefaultLayout;
  const [rtl, setRtl] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  const { i18n } = useTranslation();

  useEffect(() => {
    setUpInitialLang();
    setRtl(isRtl(i18n.language as LocaleKey));
  }, [i18n.language]);

  return (
    <AppContext.Provider value={{ isDark, toggleDark }}>
      <PageTransition>
        <main className={isDark ? 'dark' : ''} dir={rtl ? 'rtl' : 'ltr'}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PageTransition>
    </AppContext.Provider>
  );
}
