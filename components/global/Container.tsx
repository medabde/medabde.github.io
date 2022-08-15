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
    <div id={id} className={classNames(mode === 'darker' ? 'bg-palette-light-primary' : 'bg-white', 'w-full')}>
      <div className="max-w-6xl mx-auto px-5">
        {title && (
          <ScrollReveal>
            <h3 className={classNames(mode === 'darker' ? 'text-white' : 'text-palette-light-primary', 'text-5xl font-bold py-12')}>{title}</h3>
          </ScrollReveal>
        )}
        <ScrollReveal>{children}</ScrollReveal>
      </div>
    </div>
  );
};

export default Container;
