import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';
import AppContext from './context/AppContext';

ReactDOM.render(
  // <AppContext.Provider values={''}>
  <App />,
  // </AppContext.Provider>,
  document.getElementById('app')
);
