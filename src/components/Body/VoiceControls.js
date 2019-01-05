import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class VoiceControls extends Component {
  render() {
    const { recording, clearText, text } = this.props.view;
    const { startRecognition, stopRecognition } = this.props.speechRecognition;
    return (
      <div style={{ flex: '0 0 auto' }}>
        {recording && (
          <span className='circle' />
        )}
        <button
          className='button'
          disabled={ recording }
          onClick={ startRecognition }>Start</button>
        <button
          className='button'
          disabled={ !recording }
          onClick={ stopRecognition }>Stop</button>
        <button
          className='button'
          disabled={ !text }
          onClick={ clearText }>Clear</button>
      </div>
    );
  }
}

export default inject('view', 'speechRecognition')(observer(VoiceControls));
