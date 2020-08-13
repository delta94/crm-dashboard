import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
} from '@material-ui/core';
import { WHITE, Caption14, GRAY_100 } from 'admin-library';

const NavLinks = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const navLinks = [
    {
      title: t('dashboard.name'),
      href: '/dashboard',
    },
    {
      title: t('games.name'),
      href: '/games',
    },
    {
      title: t('company_settings.name'),
      href: '/company-settings',
    },
    {
      title: t('support.name'),
      href: '/support',
    },
  ];

  return (
    <Nav>
      {navLinks.map(({ title, href }) => (
        <StyledLink to={href} key={title}>
          <StyledListItem button>
            <Caption14 color={pathname === href ? GRAY_100 : WHITE}>
              {title}
            </Caption14>
          </StyledListItem>
        </StyledLink>
      ))}
    </Nav>
  );
};

export default React.memo(NavLinks);

const Nav = styled(List)`
  padding: 16px 0;
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  color: ${WHITE};
  text-transform: capitalize;
  text-decoration: none;
  display: block;
`;

const StyledListItem = styled(ListItem)`
  padding-left: 38px;
`;
