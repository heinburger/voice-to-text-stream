import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import StyledCaption from './_StyledCaption';

class OnlineStatus extends React.Component {
  render() {
    const { settings, translate } = this.props
    return (
      <StyledCaption>
        {translate.getText('Online status')}
        {settings.isOnline ? ' 👍' : ' 👎'}
      </StyledCaption>
    );
  }
}

OnlineStatus.propTypes = {
  settings: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
}

export default inject('settings', 'translate')(observer(OnlineStatus));
