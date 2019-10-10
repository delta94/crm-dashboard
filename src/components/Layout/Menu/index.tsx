import React, { useState } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ProductIcon from '@material-ui/icons/Collections';
import { withRouter } from 'react-router-dom';
import {
  translate,
  DashboardMenuItem,
  MenuItemLink,
  Responsive,
} from 'react-admin';

import SubMenu from '../SubMenu';
import { TranslationContextProps } from 'ra-core';

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
        name="pos.menu.members"
        icon={<ProductIcon />}
      >
        <MenuItemLink
          to={'/users'}
          primaryText={translate('resources.commands.name')}
          leftIcon={<ProductIcon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={'/groups'}
          primaryText={translate('resources.invoices.name')}
          leftIcon={<ProductIcon />}
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
