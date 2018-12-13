import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const StyledFormControl = withStyles(styles)(({ classes, ...rest }) => (
  <FormControl variant="outlined" className={classes.formControl} {...rest} />
));

class SelectLang extends React.Component {
  state = {
    labelWidth: 0,
  };
  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }
  render() {
    const { settings } = this.props
    return (
      <StyledFormControl>
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="outlined-age-simple"
        >
          Age
        </InputLabel>
        <Select
          value={settings.language}
          onChange={this._handleChange}
          input={
            <OutlinedInput
              labelWidth={this.state.labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
  router: PropTypes.object.isRequired,
}

export default inject('settings')(observer(SelectLang));
