
import { useState } from 'react';
import './App.css'
import { AlertContainer } from './containers/AlertContainer/AlertContainer';

import { InfoContainer } from './containers/InfoContainer/InfoContainer';
function App() {

  return (
    <div className="App">
      <AlertContainer />
      <section className='info-container'>
        <InfoContainer CHANNEL={'CH11'} SIGNAL />
        <InfoContainer CHANNEL={'CH12'} />
      </section>
    </div>
  );
}

export default App;
