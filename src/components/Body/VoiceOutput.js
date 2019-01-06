import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    margin: `${theme.spacing.unit * 2}px`,
    flex: '1 1 200px',
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
    const { text, guessText, screenHeight, screenWidth } = this.props.view
    return (
      <div style={{ flex: '1 0 auto', display: 'flex', flexWrap: 'wrap' }}>
        <StyledTextField
          variant='filled'
          rows={Math.floor((screenHeight - 200) / 19 / (screenWidth < 464 ? 2.5 : 1)) }
          disabled
          placeholder='guesses show up here... say things like "new paragraph" or "period" for punctuation'
          label='guess'
          multiline
          value={ guessText }
          onChange={ () => false } />
        <StyledTextField
          variant='outlined'
          rows={Math.floor((screenHeight - 200) / 19 / (screenWidth < 464 ? 2.5 : 1))}
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
