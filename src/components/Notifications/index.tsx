import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { TranslationContextProps, translate } from 'ra-core';
import { IconButton, Paper, ClickAwayListener, Typography, Badge } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import compose from 'recompose/compose';

import NotificationList, { Notification } from './List';
import { NOTIFICATIONS_SUBSCRIPTION, NOTIFICATION_UPDATE } from './query';
import styles from './styles';

interface Notifications {
  notifications: Notification[];
}

interface WithClient {
  client: ApolloClient<NormalizedCacheObject>;
}

type InjectedProps = WithStyles<typeof styles> & TranslationContextProps & WithClient;

const Notifications = (props: InjectedProps) => {
  const { classes, translate } = props;
  const [client, setClient] = useState(props.client);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  const handleClickAway = () => setOpen(false);
  const { data, loading } = useSubscription<Notifications>(NOTIFICATIONS_SUBSCRIPTION, { client });
  const [viewNotification] = useMutation(NOTIFICATION_UPDATE, { client });
  const { notifications = [] } = data || {};
  const notViwedCount = !loading ? notifications.filter(({ viewed }) => !viewed).length : 0;
  const onClickNotification = (id: number) => viewNotification({ variables: { id } });

  useEffect(() => {
    setClient(props.client);
  }, [props.client]);

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
          {isOpen && (
            <Paper className={classes.paper}>
              <div className={classes.header}>
                <Typography variant="subheading">{translate('root.notifications.title')}</Typography>
              </div>
              <NotificationList onClickItem={onClickNotification} loading={loading} list={notifications} />
            </Paper>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ client: state.client });

export default compose<InjectedProps, {}>(
  translate,
  connect(mapStateToProps),
  withStyles(styles)
)(Notifications);
