import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Languages from './Languages'
import VoiceControls from './VoiceControls'
import VoiceOutput from './VoiceOutput'

class App extends Component {
  state = {
    recording: false,
    lang: 'de-DE',
    output: '',
    guess: ''
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Languages selectedLang={ this.state.lang } selectLang={ (lang) => this.setState({ lang })} />
          <VoiceControls recording={ this.state.recording } />
          <VoiceOutput { ...this.state  } />
        </header>
      </div>
    );
  }
}

export default App;
