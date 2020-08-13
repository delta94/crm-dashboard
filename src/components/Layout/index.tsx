import React, { ReactNode } from 'react';
import { Layout as BasicLayout, Loader, Login } from 'admin-library';
import { login } from 'auth';
import { useUserState } from 'containers/User';

import Sidebar from './components/Sidebar';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const { user, loading } = useUserState();

  if (loading) return <Loader />;

  if (!user) return <Login onLogin={login} />;

  return (
    <BasicLayout
      sidebar={<Sidebar />}
    >
      {children}
    </BasicLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Layout, areEqual);
