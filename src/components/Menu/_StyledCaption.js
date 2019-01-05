import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  caption: {
    paddingTop: `${theme.spacing.unit}px`,
    color: theme.palette.text.secondary,
  },
});

const StyledCaption = withStyles(styles)(({ classes, ...rest }) => (
  <Typography
    variant='caption'
    className={classes.caption}
    noWrap
    {...rest}
  />
));

export default StyledCaption;
