import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  wrapper: Object.assign({}, theme.mixins.toolbar, {
    display: 'flex',
  }),
  drawerHeader: Object.assign({}, theme.mixins.gutters(), {
    display: 'flex',
    alignItems: 'center',
  }),
  caption: {
    paddingLeft: `${theme.spacing.unit}px`,
    paddingTop: `${theme.spacing.unit / 2}px`,
  },
  h6: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary[theme.palette.type],
      textDecoration: 'underline'
    }
  },
});

const Header = ({ classes, router }) => (
  <div className={classes.wrapper}>
    <div className={classes.drawerHeader}>
      <Typography
        variant='h6'
        className={classes.h6}
        noWrap
        onClick={() => router.goTo('/')}
      >
        Voice to text
      </Typography>
      <Typography className={classes.caption} variant='caption' noWrap>
        v0.2.0
      </Typography>
    </div>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

export default withStyles(styles)(inject('router')(Header));
