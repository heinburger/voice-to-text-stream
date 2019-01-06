import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Cancel';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  container: {
    position: 'fixed',
    right: theme.spacing.unit,
    bottom: theme.spacing.unit
  },
});

const StyledFab = withStyles(styles)(({ classes, ...rest }) => (
  <Fab
    className={classes.fab}
    {...rest}
  />
));

const StyledFabContainer = withStyles(styles)(({ classes, ...rest }) => (
  <div
    className={classes.container}
    {...rest}
  />
));

const VoiceControls = ({ view, speechRecognition, translate }) => {
  const { recording, clearText, text, screenWidth } = view;
  const { startRecognition, stopRecognition } = speechRecognition;
  return (
    <StyledFabContainer>
      {recording
        ? <StyledFab
          size={screenWidth < 600 ? 'small' : 'large'}
          color='secondary'
          onClick={ stopRecognition }><StopIcon /></StyledFab>
        : <StyledFab
          size={screenWidth < 600 ? 'small' : 'large'}
          color='primary'
          onClick={ startRecognition }><MicIcon /></StyledFab>
      }
      <StyledFab
        size={screenWidth < 600 ? 'small' : 'large'}
        disabled={ !text }
        onClick={ clearText }
      >
        <DeleteIcon />
      </StyledFab>
    </StyledFabContainer>
  );
}

export default inject('view', 'speechRecognition', 'translate')(observer(VoiceControls));
