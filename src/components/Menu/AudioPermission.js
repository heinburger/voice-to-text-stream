import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';

import StyledCaption from './_StyledCaption';

class AudioPermission extends React.Component {
  render() {
    const { settings, translate } = this.props
    return (
      <div>
        <StyledCaption>
          {translate.getText('Audio permission')}
          {settings.audioPermission ? ' 👍' : ' 👎'}
        </StyledCaption>
        {!settings.audioPermission && (
          <Button variant='contained' onClick={ settings.requestAudioPermission }>
            {translate.getText('Request')}
          </Button>
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
