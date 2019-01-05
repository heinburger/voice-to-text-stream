import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import StyledCaption from './_StyledCaption';

class AudioPermission extends React.Component {
  render() {
    const { settings, translate } = this.props
    return (
      <div>
        <StyledCaption>
          {translate.getText('Audio permission')}
          {settings.audioPermissionGranted ? ' 👍' : ' 👎'}
        </StyledCaption>
        {!settings.audioPermissionGranted && (
          <button onClick={ settings.requestAudioPermission }>request</button>
        )}
      </div>
    );
  }
}

AudioPermission.propTypes = {
  settings: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
}

export default inject('settings', 'translate')(observer(AudioPermission));
