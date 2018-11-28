import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class VoiceOutput extends Component {
  render() {
    const { text, guessText } = this.props.view
    return (
      <div style={{ padding: '15px', flex: '1 1 auto', display: 'flex', height: '100%', flexDirection: 'column' }}>
        <textarea
          disabled
          style={{ fontSize: '24px', width: '100%', flex: '1 1 auto' }}
          value={ guessText }
          onChange={ () => false } />
        <textarea
          style={{ fontSize: '24px', width: '100%', flex: '1 1 auto' }}
          value={ text }
          onChange={ this.handleOnChange }
          onFocus={ this.handleOnFocus } />
      </div>
    );
  }
  handleOnChange = (e) => {
    console.log('changing')
    const { recording, setText } = this.props.view;
    const { stopRecognition } = this.props.speechRecognition;
    if (recording) {
      stopRecognition();
    } else {
      setText(e.target.value);
    }

  }
  handleOnFocus = (e) => {
    console.log('focusing')
    const { recording } = this.props.view;
    const { stopRecognition } = this.props.speechRecognition;
    if (recording) {
      stopRecognition();
    }
  }
}

export default inject('view', 'speechRecognition')(observer(VoiceOutput));;
