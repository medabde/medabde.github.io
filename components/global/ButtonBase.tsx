import { ReactNode } from 'react';
import { classNames } from '../../utils/helpers';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'info' | 'primary';
  className?: string;
  disabled?: boolean;
  link?: string;
};

const ButtonBase = ({ children, onClick, type, className, disabled, link }: Props) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={classNames(type === 'info' ? 'bg-palette-light-secondary' : 'bg-palette-light-primary', `shadow-lg px-3 py-2 text-base font-semibold rounded-sm  text-white hover:bg-opacity-80 ${className}`)}>
        {children}
      </a>
    );
  }
  return (
    <button disabled={disabled} type="button" onClick={onClick} className={classNames(type === 'info' ? 'bg-palette-light-secondary' : 'bg-palette-light-primary', `shadow-lg px-3 py-2 text-base font-semibold rounded-sm  text-white hover:bg-opacity-80 ${className}`)}>
      {children}
    </button>
  );
};
export default ButtonBase;
