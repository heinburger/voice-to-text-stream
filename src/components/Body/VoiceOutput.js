import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';

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
      <div>
        <div>
          <TextField
            style={{ width: '100%' }}
            ref='guess'
            disabled
            placeholder='guesses show up here... say things like "new paragraph" or "period" for punctuation'
            label='guess'
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            value={ guessText }
            onChange={ () => false } />
        </div>
        <div>
          <TextField
            style={{ width: '100%' }}
            ref='output'
            placeholder='...'
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            value={ text }
            label='output'
            onChange={ this.handleOnChange }
            onFocus={ this.handleOnFocus } />
        </div>
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
