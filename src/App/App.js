import React from 'react';
import DevTools from 'mobx-react-devtools';
import './App.css';

import logo from './logo.svg';
import AppStore from './App.store'
import StoreProvider from './StoreProvider'
import Languages from '../components/Languages'
import VoiceControls from '../components/VoiceControls'
import VoiceOutput from '../components/VoiceOutput'

const App = () => (
  <StoreProvider store={ new AppStore() }>
    <div className="App">
      <div style={{ flex: '0 0 auto' }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Languages />
      <VoiceControls />
      <VoiceOutput />
    </div>
  </StoreProvider>
);

export default App;
