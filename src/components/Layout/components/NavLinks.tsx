import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
} from '@material-ui/core';
import { WHITE } from 'admin-library';

const NavLinks = () => {
  const { t } = useTranslation();
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
            {title}
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
  font-size: 14px;
  line-height: 22px;
`;
