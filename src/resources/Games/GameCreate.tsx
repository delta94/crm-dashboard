import React from 'react';
import { Create } from 'react-admin';

import GameTabs from './GameTabs';

const GameCreate = (props: any) => {
  return (
    <Create {...props}>
      <GameTabs />
    </Create>
  );
};

export default React.memo(GameCreate);
