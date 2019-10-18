import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useSubscription } from '@apollo/react-hooks';
import { TranslationContextProps, translate } from 'ra-core';
import { IconButton, Paper, ClickAwayListener, Typography, Badge } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import NotificationsIcon from '@material-ui/icons/Notifications';
import client from 'apolloWSClient';
import NotificationList, { Notification } from './List';

import styles from './styles';

const NOTIFICATIONS_SUBSCRIPTION = gql`
  subscription getNotifications {
    notifications(order_by: {timestamp: desc}) {
      id
      text
      timestamp
      viewed
    }
  }
`;

interface Notifications {
  notifications: Notification[];
}

const Notifications = (props: WithStyles<typeof styles> & TranslationContextProps) => {
  const { classes, translate } = props;
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  const handleClickAway = () => setOpen(false);
  const { data, loading } = useSubscription<Notifications>(NOTIFICATIONS_SUBSCRIPTION, { client });
  const { notifications = [] } = data || {};

  const notViwedCount = !loading ? notifications.filter(({ viewed }) => !viewed).length : 0;

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <IconButton onClick={handleClick}>
            <Badge
              badgeContent={notViwedCount}
              color="primary"
              classes={{ badge: notViwedCount > 0 ? classes.badge : classes.hidden }}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {isOpen ? (
            <Paper className={classes.paper}>
              <div className={classes.header}>
                <Typography variant="subheading">{translate('root.notifications.title')}</Typography>
              </div>
              <NotificationList loading={loading} list={notifications} />
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default compose<WithStyles<typeof styles> & TranslationContextProps, {}>(
  translate,
  withStyles(styles)
)(Notifications);
