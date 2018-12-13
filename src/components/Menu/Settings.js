import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import SelectLang from './SelectLang';

const styles = theme => ({
  wrapper: theme.mixins.gutters(),
  settingsH6: {
    padding: `${theme.spacing.unit}px 0`,
    color: theme.palette.text.secondary,
  },
});

const Settings = ({ classes }) => (
  <div className={classes.wrapper}>
    <Typography
      variant='h6'
      className={classes.settingsH6}
      noWrap
    >
      Settings
    </Typography>
    <SelectLang />
  </div>
);

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Settings);
