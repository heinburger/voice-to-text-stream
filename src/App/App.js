import React from 'react';
import DevTools from 'mobx-react-devtools';
import './App.css';

import AppStore from './App.store'
import StoreProvider from './StoreProvider'
import Languages from '../components/Languages'
import VoiceControls from '../components/VoiceControls'
import VoiceOutput from '../components/VoiceOutput'

const App = () => (
  <StoreProvider store={ new AppStore() }>
    <div className="App">
      <Languages />
      <VoiceOutput />
      <VoiceControls />
    </div>
  </StoreProvider>
);

export default App;
