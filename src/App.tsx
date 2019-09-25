import React from 'react';

import { checkEnv } from 'helpers';

const App: React.FC = () => {
  return (
    <div className="App">
      {checkEnv() ? 'Admin Seed' : 'Error!!!'}
    </div>
  );
};

export default App;
