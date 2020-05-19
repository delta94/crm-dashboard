import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

import GameTabs from './GameTabs';

const GameCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <GameTabs />
        <TextInput source="name" label="resources.games.fields.name" />
      </SimpleForm>
    </Create>
  );
};

export default React.memo(GameCreate);
