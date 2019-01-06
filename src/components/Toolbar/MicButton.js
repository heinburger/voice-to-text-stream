import React from 'react';
import { inject } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import Mic from '@material-ui/icons/Mic';

const MicButton = ({ speechRecognition }) => (
  <IconButton
    color='inherit'
    aria-label='recording'
    onClick={speechRecognition.stopRecognition}
  >
    <Mic />
  </IconButton>
);

export default inject('speechRecognition')(MicButton);
