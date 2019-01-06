import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import MicOff from '@material-ui/icons/MicOff';

const styles = theme => ({
  message: Object.assign({}, theme.mixins.gutters(), {
    paddingTop: `${theme.spacing.unit}px`,
    color: theme.palette.text.secondary,
  }),
});

const StyledMessage = withStyles(styles)(({ classes, ...rest }) => (
  <Typography
    variant='h5'
    className={classes.message}
    {...rest}
  />
));

const NotSupported = ({ translate }) => (
  <StyledMessage>
    <MicOff style={{ verticalAlign: 'middle' }}/>
    {` ${translate.getText('Speech recognition is not supported by your device.')}`}
  </StyledMessage>
);

NotSupported.propTypes = {
  translate: PropTypes.object.isRequired,
};

export default inject('translate')(observer(NotSupported));
