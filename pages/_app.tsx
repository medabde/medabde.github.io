import { AppProps } from 'next/app';
import '../i18n';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
