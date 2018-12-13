import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    width: '100%',
  },
});

const supportedAudio = ['default', 'headphones', 'blah'];

const StyledFormControl = withStyles(styles)(({ classes, ...rest }) => (
  <FormControl className={classes.formControl} {...rest} />
));

class SelectAudio extends React.Component {
  render() {
    const { settings } = this.props
    return (
      <StyledFormControl>
        <InputLabel htmlFor="audio-simple">Audio source</InputLabel>
        <Select
          value={settings.audioSource}
          onChange={this._handleChange}
          inputProps={{
            name: 'audio',
            id: 'audio-simple',
          }}
        >
          {
            supportedAudio.map((audio) => (
              <MenuItem key={ audio } value={ audio }>{ audio }</MenuItem>
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
}

export default inject('settings')(observer(SelectAudio));
