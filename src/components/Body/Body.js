import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import NotSupported from './NotSupported';
import VoiceOutput from './VoiceOutput';
import VoiceControls from './VoiceControls';

const Body = ({ settings }) => {
  return settings.speechRecognitionSupported
    ? <><VoiceOutput /><VoiceControls /></>
    : <NotSupported />
};

Body.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default inject('settings')(observer(Body));
