import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    width: '100%',
    marginTop: `${theme.spacing.unit}px`,
  },
});

const StyledFormControl = withStyles(styles)(({ classes, ...rest }) => (
  <FormControl className={classes.formControl} {...rest} />
));

class SelectAudio extends React.Component {
  render() {
    const { settings, translate } = this.props
    return (
      <StyledFormControl>
        <InputLabel htmlFor="audio-simple">{ translate.getText('Audio source') }</InputLabel>
        <Select
          native
          value={settings.audioSource}
          onChange={this._handleChange}
          inputProps={{
            name: 'audio',
            id: 'audio-simple',
          }}
        >
          <option key='default' value='default'>{ translate.getText('Default') }</option>
          {
            settings.audioDevices.map((device) => (
              <option key={ device.deviceId } value={ device.deviceId }>{ device.label || translate.getText('Unknown') }</option>
            ))
          }
        </Select>
      </StyledFormControl>
    );
  }
  _handleChange = e => {
    const { settings } = this.props
    settings.setAudioSource(e.target.value);
  };
}

SelectAudio.propTypes = {
  settings: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
}

export default inject('settings', 'translate')(observer(SelectAudio));
