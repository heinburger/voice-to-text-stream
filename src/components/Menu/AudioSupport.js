import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import StyledCaption from './_StyledCaption';

class AudioSupport extends React.Component {
  render() {
    const { settings, translate } = this.props
    return (
      <StyledCaption>
        {translate.getText('Audio support')}
        {settings.audioSupported ? ' 👍' : ' 👎'}
      </StyledCaption>
    );
  }
}

AudioSupport.propTypes = {
  settings: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
}

export default inject('settings', 'translate')(observer(AudioSupport));
