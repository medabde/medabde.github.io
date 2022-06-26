import { Transition } from '@tailwindui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  show: boolean;
};
const PageTransition = ({ children, show }: Props) => {
  return (
    <Transition show={show} appear={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
      {children}
    </Transition>
  );
};
export default PageTransition;
