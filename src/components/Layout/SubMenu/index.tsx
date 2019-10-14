import React, { Fragment, ReactElement, useState } from 'react';
import { TranslationContextProps, translate } from 'ra-core';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Collapse, withStyles } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import compose from 'recompose/compose';

import styles from './styles';

interface Props extends TranslationContextProps {
  sidebarIsOpen: boolean;
  name: string;
  classes: any;
  children: ReactElement;
  icon: ReactElement;
}

const SubMenu: React.FC<Props> = (props: Props) => {
  const {
    sidebarIsOpen,
    name,
    icon,
    classes,
    children,
    translate,
  } = props;

  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => setOpen(!isOpen);

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
