import React from 'react';
import './App.css';
import Typed from 'react-typed';

import { Thing } from 'tsdx-test';

const style = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
};

function App() {

  return (
      <div style={style}>
        <h1>
            <Typed strings={['Hello world!']} />
        </h1>
        <br />
        <Thing />
      </div>
  );
}

export default App;
