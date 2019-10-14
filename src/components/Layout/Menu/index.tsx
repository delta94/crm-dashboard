import React, { useState } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ProductIcon from '@material-ui/icons/Collections';
import { withRouter } from 'react-router-dom';
import { TranslationContextProps } from 'ra-core';
import {
  translate,
  DashboardMenuItem,
  MenuItemLink,
  Responsive,
} from 'react-admin';
import SubMenu from '../SubMenu';

import groups from 'resources/Groups';
import invites from 'resources/Invites';

interface Props extends TranslationContextProps {
  onMenuClick: () => void;
  open: boolean;
  logout: any;
}

const Menu: React.FC<Props> = (props: Props) => {
  const { onMenuClick, open, logout, translate } = props;
  const [isMembersMenuOpen, toggleMembersMenu] = useState(false);
  return (
    <div>
      {' '}
      <DashboardMenuItem onClick={onMenuClick} />
      <SubMenu
        handleToggle={() => toggleMembersMenu(!isMembersMenuOpen)}
        isOpen={isMembersMenuOpen}
        sidebarIsOpen={open}
        name="root.menu.users"
        icon={<ProductIcon />}
      >
        <MenuItemLink
          to={'/invites'}
          primaryText={translate('resources.invites.name')}
          leftIcon={<invites.icon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={'/users'}
          primaryText={translate('resources.users.name')}
          leftIcon={<ProductIcon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={'/groups'}
          primaryText={translate('resources.groups.name')}
          leftIcon={<groups.icon />}
          onClick={onMenuClick}
        />
      </SubMenu>
      <Responsive
        small={logout}
        medium={null} // Pass null to render nothing on larger devices
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  open: state.admin.ui.sidebarOpen,
  theme: state.theme,
  locale: state.i18n.locale,
});

const enhance = compose<Props, {}>(
  withRouter,
  connect(
    mapStateToProps,
    {}
  ),
  translate
);

export default enhance(Menu);
