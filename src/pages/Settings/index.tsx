import React from 'react';
import compose from 'recompose/compose';
import { translate, TranslationContextProps } from 'ra-core';
import {
  Card, CardContent, List, ListItem, ListItemIcon, ListItemText, CardHeader,
} from '@material-ui/core';
import ArchieveIcon from '@material-ui/icons/Archive';
import { NavLink } from 'react-router-dom';

const Settings = (props: TranslationContextProps) => {
  const { translate } = props;
  return (
    <Card>
      <CardHeader
        title={translate('pages.settings.title')}
      />
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem component={(props: any) => <NavLink {...props} to="/documents" />} button>
            <ListItemIcon>
              <ArchieveIcon />
            </ListItemIcon>
            <ListItemText primary={translate('pages.settings.links.documents')} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

const enhance = compose<TranslationContextProps, {}>(
  translate
);

export default enhance(Settings);
