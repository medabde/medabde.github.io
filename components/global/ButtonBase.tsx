import { ReactNode } from 'react';
import { classNames } from '../../utils/helpers';

type Props = {
  children: ReactNode;
  onClick: () => void;
  type?: 'info' | 'primary';
};

const ButtonBase = ({ children, onClick, type }: Props) => {
  return (
    <button onClick={onClick} className={classNames(type === 'primary' ? 'bg-[#246B97]' : 'bg-gray-600', 'px-3 py-2 text-base font-semibold rounded-md bg-palette-light-primary text-white bg-opacity-60 hover:bg-blue-700')}>
      {children}
    </button>
  );
};
export default ButtonBase;
