import React from 'react';

import { isEnvDefined, env } from 'helpers';

const App: React.FC = () => {
  if (!isEnvDefined()) {
    return <div>Environment variables is not defined</div>;
  }

  return (
    <div className="App">
      <p>BASE_URL: {env('BASE_URL')}</p>
      <p>API_URL: {env('API_URL')}</p>
      <p>MY_VAR: {env('MY_VAR')}</p>
    </div>
  );
};

export default App;
