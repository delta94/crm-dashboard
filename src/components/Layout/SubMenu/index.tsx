import React, { Fragment, ReactElement } from 'react';
import { TranslationContextProps, translate } from 'ra-core';
import compose from 'recompose/compose';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

interface Props extends TranslationContextProps {
  handleToggle: () => void;
  sidebarIsOpen: boolean;
  isOpen: boolean;
  name: string;
  classes: any;
  children: ReactElement;
  icon: ReactElement;
}


const SubMenu: React.FC<Props> = (props: Props) => {
  const {
    handleToggle,
    sidebarIsOpen,
    isOpen,
    name,
    icon,
    classes,
    children,
    translate,
  } = props;

  return (
    <Fragment>
      <ListItem
        dense
        button
        onClick={handleToggle}
        className={classes.listItem}
      >
        <ListItemIcon>{isOpen ? <ExpandMore /> : icon}</ListItemIcon>
        <ListItemText
          inset
          primary={isOpen ? translate(name) : ''}
          secondary={isOpen ? '' : translate(name)}
          className={classes.listItemText}
        />
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense
          component={'div' as any}
          disablePadding
          className={
            sidebarIsOpen
              ? classes.sidebarIsOpen
              : classes.sidebarIsClosed
          }
        >
          {children}
        </List>
        <Divider />
      </Collapse>
    </Fragment>
  );
};

const enhance = compose<Props, any>(
  withStyles(styles),
  translate
);

export default enhance(SubMenu);
