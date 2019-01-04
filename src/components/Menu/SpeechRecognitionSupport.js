import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  caption: {
    paddingTop: `${theme.spacing.unit}px`,
    color: theme.palette.text.secondary,
  },
});

const StyledTypography = withStyles(styles)(({ classes, ...rest }) => (
  <Typography
    variant='caption'
    className={classes.caption}
    noWrap
    {...rest}
  />
));

class SpeechRecognitionSupport extends React.Component {
  render() {
    const { settings } = this.props
    return (
      <StyledTypography>
        Speech Recognition support
      </StyledTypography>
    );
  }
}

SpeechRecognitionSupport.propTypes = {
  settings: PropTypes.object.isRequired,
}

export default inject('settings')(observer(SpeechRecognitionSupport));
