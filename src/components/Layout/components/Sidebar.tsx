import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { BLACK_600, GRAY_100, Micro10, UserMenu } from 'admin-library';
import { logout } from 'auth';
import { useUserState } from 'containers/User';
import { LogoIcon } from 'assets/icons';

import NavLinks from './NavLinks';
import Onboarding from './Onboarding';

interface Props {
  className?: string;
}

const Sidebar = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { user } = useUserState();

  return (
    <Wrapper className={className}>
      <LogoWrapper><LogoIcon /></LogoWrapper>
      <UserWrapper>
        <UserMenu
          menuItems={[{ title: t('logout'), onClick: logout }]}
          user={user}
        />
      </UserWrapper>
      <Divider />
      <NavLinks />
      <Divider />
      <Onboarding />
      <Divider />
      <Confidential color={GRAY_100}>
        {t('layout.confidential_information')}
      </Confidential>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Sidebar, areEqual);

const Wrapper = styled.div`
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const UserWrapper = styled.div`
  margin-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${BLACK_600};
`;

const Confidential = styled(Micro10)`
  padding-top: 16px;
  display: block;
`;
