import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Languages from './Languages'
import VoiceControls from './VoiceControls'
import VoiceOutput from './VoiceOutput'
import recognition from './speechRecognition'

class App extends Component {
  state = {
    recording: false,
    lang: 'de-DE',
    output: '',
    guess: ''
  }
  handleStart = (e) => {
    this.setState({ recording: true })
  }
  handleResults = (e) => {
    let guess = ''
    let output = this.state.output
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        output = output + ' ' + e.results[i][0].transcript
      } else {
        guess = guess + ' ' + e.results[i][0].transcript
      }
    }
    this.setState({ output, guess })
  }
  handleEnd = (e) => {
    this.setState({ recording: false })
  }
  onStartClick = () => {
    try {
      recognition.start()
    } catch (DOMException) {
      // ...
    }
  }
  onStopClick = () => {
    try {
      recognition.stop()
    } catch (DOMException) {
      // ...
    }
  }
  componentWillMount() {
    if (recognition) {
      recognition.onstart = this.handleStart.bind(this)
      recognition.onresult = this.handleResults.bind(this)
      recognition.onend = this.handleEnd.bind(this)
    }
  }
  render() {
    recognition.lang = this.state.lang
    return (
      <div className="App">
        <div style={{ flex: '0 0 auto' }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Languages
          disabled={ this.state.recording }
          selectedLang={ this.state.lang }
          selectLang={ (lang) => this.setState({ lang })} />
        <VoiceControls
          recording={ this.state.recording }
          onStartClick={ this.onStartClick }
          onStopClick={ this.onStopClick } />
        <VoiceOutput { ...this.state  } />
      </div>
    );
  }
}

export default App;
