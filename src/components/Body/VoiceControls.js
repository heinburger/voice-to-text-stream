import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';

class VoiceControls extends Component {
  render() {
    const { recording, clearText, text } = this.props.view;
    const { startRecognition, stopRecognition } = this.props.speechRecognition;
    return (
      <div>
        <Button
          variant='contained'
          color='primary'
          disabled={ recording }
          onClick={ startRecognition }>Start</Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={ stopRecognition }>Stop</Button>
        <Button
          variant='contained'
          disabled={ !text }
          onClick={ clearText }>Clear</Button>
      </div>
    );
  }
}

export default inject('view', 'speechRecognition')(observer(VoiceControls));
