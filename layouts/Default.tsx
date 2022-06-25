import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return <div>default layout {children}</div>;
};
export default DefaultLayout;
