import React from 'react';
import { Mutation } from 'react-admin';
import compose from 'recompose/compose';
import { List, ListItem, ListItemText, CircularProgress, Typography } from '@material-ui/core';
import { TranslationContextProps, translate } from 'ra-core';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

export interface Notification {
  id: number;
  text: string;
  viewed: boolean;
}

interface NotificationListProps extends WithStyles<typeof styles>, TranslationContextProps {
  loading: boolean;
  list: Notification[];
}

const NotificationList = (props: NotificationListProps) => {
  const { classes, loading, list, translate } = props;

  if (loading) {
    return (
      <div className={classes.alignContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (!list.length) {
    return (
      <div className={classes.alignContainer}>
        <Typography gutterBottom variant="body1">{translate('root.notifications.noContentTitle')}</Typography>
        <Typography variant="caption">{translate('root.notifications.noContentText')}</Typography>
      </div>
    );
  }

  return (
    <List
      dense
      disablePadding
      className={classes.list}
    >
      {list.map(({ id, text, viewed }) => (
        <Mutation
          key={id}
          type="UPDATE"
          resource="notifications"
          payload={{ id, data: { viewed: true } }}
        >
          {(viewNotification: () => void) => (
            <ListItem divider button onClick={!viewed ? viewNotification : () => { }}>
              <ListItemText primary={text} />
              {!viewed && <div className={classes.new} />}
            </ListItem>
          )}
        </Mutation>
      ))}
    </List>
  );
};

export default compose<NotificationListProps, any>(
  translate,
  withStyles(styles)
)(NotificationList);
