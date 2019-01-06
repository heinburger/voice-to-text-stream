import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    flex: '1 1 250px',
  },
});

const StyledTextField = withStyles(styles)(({ classes, ...rest }) => (
  <TextField
    InputLabelProps={{
      shrink: true,
    }}
    className={classes.textField}
    {...rest}
  />
));

class VoiceOutput extends Component {
  render() {
    const { text, guessText, inputRowsGuess, inputRowsOutput } = this.props.view;
    const { translate } = this.props;
    if (this.guess) {
      this.guess.scrollTop = this.guess.scrollHeight;
    }
    if (this.output) {
      this.output.scrollTop = this.output.scrollHeight;
    }
    return (
      <div style={{ flex: '0 0 auto', display: 'flex', flexWrap: 'wrap' }}>
        <StyledTextField
          variant='filled'
          inputRef={(guess) => this.guess = guess}
          rows={inputRowsGuess}
          disabled
          placeholder={translate.getText('Guesses show up here... say things like "new paragraph" or "period" for punctuation')}
          label={`${translate.getText('Guess')} 🤔`}
          multiline
          value={ guessText }
          onChange={ () => false } />
        <StyledTextField
          variant='filled'
          inputRef={(output) => this.output = output}
          rows={inputRowsOutput}
          placeholder='...'
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          value={ text }
          label={`${translate.getText('Output')} 🤮`}
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

export default inject('view', 'translate', 'speechRecognition')(observer(VoiceOutput));;
