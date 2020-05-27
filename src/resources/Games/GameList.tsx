import React from 'react';
import { List, Datagrid, TextField, CardActions, CreateButton } from 'react-admin';

const ListActions = ({ basePath }: any) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

const GameList = (props: any) => (
  <List {...props} actions={<ListActions />} bulkActionButtons={null}>
    <Datagrid rowClick="edit">
      <TextField source="id" sortable={false} />
      <TextField source="title" sortable={false} />
    </Datagrid>
  </List>
);

export default GameList;
