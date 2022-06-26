import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return <>default layout {children}</>;
};
export default DefaultLayout;
