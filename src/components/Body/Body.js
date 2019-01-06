import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import VoiceOutput from './VoiceOutput';
import VoiceControls from './VoiceControls';

const Body = ({ router }) => (
  <>
    <VoiceOutput />
    <VoiceControls />
  </>
);

Body.propTypes = {
  router: PropTypes.object.isRequired,
};

export default inject('router')(observer(Body));
