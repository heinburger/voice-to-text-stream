import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MicOff from '@material-ui/icons/MicOff';

const styles = theme => ({
  wrapper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  card: {
    padding: theme.spacing.unit * 4,
  },
  message: Object.assign({}, theme.mixins.gutters(), {
    color: theme.palette.text.secondary,
  }),
});

const StyledMessage = withStyles(styles)(({ classes, ...rest }) => (
  <div className={classes.wrapper}>
    <Card className={classes.card}>
      <Typography variant='h2'><span role='img' aria-label='robot'>🤬</span></Typography>
      <Typography
        variant='h5'
        className={classes.message}
        {...rest}
      />
    </Card>
  </div>
));

const NotSupported = ({ translate }) => (
  <StyledMessage>
    <MicOff style={{ verticalAlign: 'middle' }}/>
    {` ${translate.getText('Speech recognition is not supported by your device. Currently only desktop Chrome and android Chrome support this technology.')}`}
  </StyledMessage>
);

NotSupported.propTypes = {
  translate: PropTypes.object.isRequired,
};

export default inject('translate')(observer(NotSupported));
