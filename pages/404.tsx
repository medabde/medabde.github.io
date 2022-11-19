import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import GithubIcon from '../components/global/icons/GithubIcon';
import LinkedInIcon from '../components/global/icons/LinkedInIcon';
import useMe from '../content/_me';
import Logo from '../layouts/components/Logo';

const NotFound = () => {
  const { t } = useTranslation();
  const { linkedIn, github } = useMe();
  return (
    <>
      <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center text-palette-light-primary">
            <Link href="/" className="inline-flex">
              <Logo />
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-palette-light-primary uppercase tracking-wide">404 {t('error')}</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{t('page-not-found')}</h1>
              <p className="mt-2 text-base text-gray-500">{t('we-cant-find-page')}</p>
              <Link href="/">
                <div className="text-base font-medium hover:cursor-pointer text-palette-light-primary hover:text-palette-light-secondary mt-6">
                  {t('back-home')}
                  <span aria-hidden="true"> &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4 rtl:flex-row-reverse">
            <a href={linkedIn} className="text-sm font-medium text-gray-500 hover:text-gray-600">
              <LinkedInIcon classNames="w-8 h-8" />
            </a>
            <span className="inline-block border-l border-gray-300" aria-hidden="true"></span>
            <a href={github} className="text-sm font-medium text-gray-500 hover:text-gray-600">
              <GithubIcon classNames="w-8 h-8" />
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
};
NotFound.key = '404';
export default NotFound;
