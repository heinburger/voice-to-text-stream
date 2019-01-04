import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { supportedLangs } from '../../utils/language'

const styles = theme => ({
  formControl: {
    width: '100%',
    marginTop: `${theme.spacing.unit}px`,
  },
});

const StyledFormControl = withStyles(styles)(({ classes, ...rest }) => (
  <FormControl className={classes.formControl} {...rest} />
));

class SelectLang extends React.Component {
  render() {
    const { settings } = this.props
    return (
      <StyledFormControl>
        <InputLabel htmlFor="language-simple">Language</InputLabel>
        <Select
          value={settings.language}
          onChange={this._handleChange}
          inputProps={{
            name: 'language',
            id: 'language-simple',
          }}
        >
          {
            supportedLangs.map(({name, tag}) => (
              <MenuItem key={ tag } value={ tag }>{ name }</MenuItem>
            ))
          }
        </Select>
      </StyledFormControl>
    );
  }
  _handleChange = e => {
    const { settings } = this.props
    settings.setLanguage(e.target.value);
  };
}

SelectLang.propTypes = {
  settings: PropTypes.object.isRequired,
}

export default inject('settings')(observer(SelectLang));
