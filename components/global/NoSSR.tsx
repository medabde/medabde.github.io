import dynamic from 'next/dynamic';
import { Props } from 'next/script';
import React from 'react';

const NoSsr = (props: Props) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
