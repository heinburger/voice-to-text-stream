import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Title from './Title';
import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import GithubLinkButton from './GithubLinkButton';
import MicButton from './MicButton';

const Toolbar = ({ view, translate, settings }) => (
  <>
    {view.showTempDrawer
      ? <ToggleDrawerButton />
      : <React.Fragment />}
    {view.recording && <MicButton />}
    <Title title={settings.isOnline ? '' : `(${translate.getText('Offline')})`} />
    <ToggleLightThemeButton />
    <GithubLinkButton />
  </>
);

Toolbar.propTypes = {
  view: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
};

export default inject('view', 'translate', 'settings')(observer(Toolbar));
