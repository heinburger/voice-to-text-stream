import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Title from './Title';
import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import GithubLinkButton from './GithubLinkButton';

const Toolbar = ({ view, translate }) => (
  <>
    {view.showTempDrawer
      ? <ToggleDrawerButton />
      : <React.Fragment />}
    <Title title={translate.getText('Voice to text')} />
    <ToggleLightThemeButton />
    <GithubLinkButton />
  </>
);

Toolbar.propTypes = {
  view: PropTypes.object.isRequired,
};

export default inject('view', 'translate')(observer(Toolbar));
