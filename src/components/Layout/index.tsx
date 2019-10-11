import React from 'react';
import { Layout } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { lightTheme } from './themes';

const MyLayout = (props: any) => {

  return (
    <Layout
      {...props}
      appBar={AppBar}
      theme={lightTheme}
      menu={Menu}
    />
  );
};

export default MyLayout;
