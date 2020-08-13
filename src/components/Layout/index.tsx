import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Layout as BasicLayout, Loader, Login, BLACK_900 } from 'admin-library';
import { login } from 'auth';
import { useUserState } from 'containers/User';

import Sidebar from './components/Sidebar';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const { user, loading } = useUserState();

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />;
      </LoaderWrapper>
    );
  }

  if (!user) return <Login onLogin={login} />;

  return (
    <BasicLayout
      sidebar={<Sidebar />}
    >
      <Content>
        {children}
      </Content>
    </BasicLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Layout, areEqual);

const Content = styled.div`
  padding: 0 40px;
`;

const LoaderWrapper = styled.div`
  height: 100vh;
  background-color: ${BLACK_900};
`;
