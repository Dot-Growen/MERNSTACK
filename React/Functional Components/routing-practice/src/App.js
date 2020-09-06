import React from 'react';
import { Router } from '@reach/router';
import Color from './components/Color'

import Home from './components/Home'
import Alphanumeric from './components/Alphanumeric';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Alphanumeric path='/:data'/>
        <Color path='/:word/:text/:bg' />
      </Router>
    </div>
  );
}

export default App;
