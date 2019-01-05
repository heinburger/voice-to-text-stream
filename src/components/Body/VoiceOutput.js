import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class VoiceOutput extends Component {
  render() {
    const { text, guessText } = this.props.view
    if (this.refs.guess) {
      this.refs.guess.scrollTop = this.refs.guess.scrollHeight;
    }
    if (this.refs.output) {
      this.refs.output.scrollTop = this.refs.output.scrollHeight;
    }
    return (
      <div style={{ padding: '0 20px', flex: '1 1 auto', display: 'flex', alignItems: 'center', height: '100%', maxHeight: '500px', flexDirection: 'column' }}>
        <textarea
          ref='guess'
          disabled
          placeholder='guesses show up here... say things like "new paragraph" or "period" for punctuation'
          style={{ backgroundColor: 'papayawhip', maxWidth: '700px', fontSize: '24px', width: '100%', flex: '1 1 30%', padding: '7px' }}
          value={ guessText }
          onChange={ () => false } />
        <textarea
          ref='output'
          placeholder='...'
          style={{ backgroundColor: 'whitesmoke', maxWidth: '700px', fontSize: '24px', width: '100%', flex: '1 1 70%', padding: '7px' }}
          value={ text }
          onChange={ this.handleOnChange }
          onFocus={ this.handleOnFocus } />
      </div>
    );
  }
  handleOnChange = (e) => {
    const { recording, setText } = this.props.view;
    const { stopRecognition } = this.props.speechRecognition;
    if (recording) {
      stopRecognition();
    } else {
      setText(e.target.value);
    }

  }
  handleOnFocus = (e) => {
    const { recording } = this.props.view;
    const { stopRecognition } = this.props.speechRecognition;
    if (recording) {
      stopRecognition();
    } else {
      e.target.select()
    }
  }
}

export default inject('view', 'speechRecognition')(observer(VoiceOutput));;
