import React from 'react';
import { useTranslation } from 'react-i18next';
import GamesIcon from '@material-ui/icons/Gamepad';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  menuLink: {
    color: 'inherit',
    textTransform: 'capitalize',
    textDecoration: 'none',
  },
});

const NavLinks = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const navLinks = [
    {
      title: t('games.name'),
      icon: <GamesIcon />,
      href: '/games',
    },
  ];

  return (
    <List>
      {navLinks.map(({ title, href, icon }) => (
        <Link to={href} className={classes.menuLink} key={title}>
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default React.memo(NavLinks);
