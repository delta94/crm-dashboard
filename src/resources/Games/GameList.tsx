import React from 'react';
import { List, Datagrid, DateField, ReferenceManyField, SingleFieldList, ChipField, TextField } from 'react-admin';

const GameList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="genre" />
        <DateField source="release_date" />
        <ReferenceManyField
          label="Platforms"
          reference="game_platforms"
          target="game_id"
          sort={{ field: 'game_id', order: 'DESC' }}
        >
          <SingleFieldList>
            <ChipField source="platform" />
          </SingleFieldList>
        </ReferenceManyField>
      </Datagrid>
    </List>
  );
};

export default GameList;
