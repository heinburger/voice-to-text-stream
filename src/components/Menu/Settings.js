import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SelectLang from './SelectLang';
import LocalStorageSupport from './LocalStorageSupport';
import SpeechRecognitionSupport from './SpeechRecognitionSupport';
import AudioSupport from './AudioSupport';
import SelectAudio from './SelectAudio';

const styles = theme => ({
  wrapper: theme.mixins.gutters(),
});

const Settings = ({ classes }) => (
  <div className={classes.wrapper}>
    <LocalStorageSupport />
    <SpeechRecognitionSupport />
    <SelectLang />
    <AudioSupport />
    <SelectAudio />
  </div>
);

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Settings);
