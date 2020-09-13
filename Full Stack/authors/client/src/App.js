import { Router} from '@reach/router';
import React from 'react';
import Main from './views/Main';
import Update from './views/Update'
import Create from './views/Create'

export default () => {

  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Update path="/edit/:id" />
        <Create path="/new" />
      </Router>
    </div>
  );
}

