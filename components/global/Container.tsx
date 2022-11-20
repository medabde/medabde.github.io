import { ReactNode, FC } from 'react';
import { classNames } from '../../utils/helpers';
import ScrollReveal from '../transitions/ScrollReveal';

type Props = {
  children?: ReactNode;
  mode?: 'darker' | 'light';
  title?: string;
  id?: string;
};

const Container: FC<Props> = ({ children, mode, title, id }: Props) => {
  return (
    <div id={id} className={classNames(mode === 'darker' ? 'bg-palette-light-primary dark:bg-palette-dark-primary' : 'bg-white dark:bg-palette-dark-secondary', 'w-full')}>
      <div className="max-w-6xl mx-auto px-5">
        {title && (
          <ScrollReveal>
            <h3 className={classNames(mode === 'darker' ? 'text-white dark:text-gray-300' : 'text-palette-light-primary dark:text-gray-300', 'text-5xl font-bold py-12')}>{title}</h3>
          </ScrollReveal>
        )}
        <ScrollReveal>{children}</ScrollReveal>
      </div>
    </div>
  );
};

export default Container;
