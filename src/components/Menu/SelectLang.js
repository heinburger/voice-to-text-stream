import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
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
    const { settings, translate } = this.props
    return (
      <StyledFormControl>
        <InputLabel htmlFor="language-simple">{translate.getText('Language')}</InputLabel>
        <Select
          native
          value={settings.language}
          onChange={this._handleChange}
          inputProps={{
            name: 'language',
            id: 'language-simple',
          }}
        >
          {
            supportedLangs.map(({name, tag}) => (
              <option key={ tag } value={ tag }>{ name }</option>
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
  translate: PropTypes.object.isRequired,
}

export default inject('settings', 'translate')(observer(SelectLang));
