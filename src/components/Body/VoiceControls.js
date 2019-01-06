import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const StyledButton = withStyles(styles)(({ classes, ...rest }) => (
  <Button
    variant='contained'
    className={classes.button}
    {...rest}
  />
));

const VoiceControls = ({ view, speechRecognition, translate }) => {
  const { recording, clearText, text } = view;
  const { startRecognition, stopRecognition } = speechRecognition;
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledButton
        color='primary'
        disabled={ recording }
        onClick={ startRecognition }
      >
        {translate.getText('Start')}
      </StyledButton>
      <StyledButton
        color='secondary'
        disabled={ !recording }
        onClick={ stopRecognition }
      >
        {translate.getText('Stop')}
      </StyledButton>
      <StyledButton
        disabled={ !text }
        onClick={ clearText }
      >
        {translate.getText('Clear')}
      </StyledButton>
    </div>
  );
}

export default inject('view', 'speechRecognition', 'translate')(observer(VoiceControls));
