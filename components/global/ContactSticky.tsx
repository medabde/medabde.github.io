import { Transition } from '@headlessui/react';
import { ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/helpers';

const DELAY_DURATION = 1700;

const Line = () => {
  return <div className="h-24 w-1 rounded-sm mt-1 bg-white" />;
};

type Props = {
  children: ReactNode;
  direction?: 'left' | 'right';
};

const RotatedContainer = ({ children, direction }: Props) => {
  return <div className={classNames(direction === 'right' ? 'right-12' : 'left-7', 'space-x-3 rtl:flex-row-reverse items-center justify-start fixed bottom-5 text-white text-base')}>{children}</div>;
};

const ContactSticky = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, DELAY_DURATION);
  }, []);

  return (
    <Transition show={show} appear enter="transition-opacity duration-[2s]" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="xl:block hidden mix-blend-difference">
        <RotatedContainer>
          <div className="rotate-90 origin-left absolute bottom-40 left-4">socials</div>
          <Line />
        </RotatedContainer>
        <RotatedContainer direction="right">
          <a href="mailto:medabde9@gmail.com" className="rotate-90 origin-left absolute bottom-[270px] left-4 font-semibold">
            Medabde9@gmail.com
          </a>
          <Line />
        </RotatedContainer>
      </div>
    </Transition>
  );
};
export default ContactSticky;
