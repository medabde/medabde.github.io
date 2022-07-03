import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  const r = '</>';
  return (
    <>
      <div className="bg-palette-light-primary">
        {r} default layout {children}
      </div>
      <div className="bg-palette-light-secondary flex">fqsdfqsdfsqdfqsdf</div>
    </>
  );
};
export default DefaultLayout;
