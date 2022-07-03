import { Transition } from '@headlessui/react';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
};
const PageTransition = ({ children }: Props) => {
  const [show, setShow] = useState(true);

  const router = useRouter();
  const aniStart = () => {
    setShow(false);
  };
  const aniEnd = () => {
    setShow(true);
  };
  useEffect(() => {
    router.events.on('routeChangeStart', aniStart);
    router.events.on('routeChangeComplete', aniEnd);
    router.events.on('routeChangeError', aniEnd);
    router.events.on('hashChangeComplete', aniEnd);
    setShow(true);
    return () => {
      router.events.off('routeChangeStart', aniStart);
      router.events.off('routeChangeComplete', aniEnd);
      router.events.off('routeChangeError', aniEnd);
    };
  }, [router]);

  return (
    <div className="relative">
      <Transition show={show} appear enter="transition-opacity duration-800" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
        {children}
      </Transition>
    </div>
  );
};
export default PageTransition;
