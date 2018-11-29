import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class VoiceControls extends Component {
  render() {
    const { recording } = this.props.view;
    const { startRecognition, stopRecognition } = this.props.speechRecognition;
    return (
      <div style={{ flex: '0 0 auto'}}>
        <button
          disabled={ recording }
          onClick={ startRecognition }>Start</button>
        <button
          disabled={ !recording }
          onClick={ stopRecognition }>Stop</button>
        {recording && (
          <span style={{ color: 'red' }}>recording</span>
        )}
      </div>
    );
  }
}

export default inject('view', 'speechRecognition')(observer(VoiceControls));
