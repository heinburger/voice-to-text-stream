import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  wrapper: Object.assign({}, theme.mixins.toolbar, {
    display: 'flex',
  }),
  drawerHeader: Object.assign({}, theme.mixins.gutters(), {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
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

const Header = ({ classes, router, translate }) => (
  <div className={classes.wrapper}>
    <div className={classes.drawerHeader}>
      <Typography
        variant='h6'
        className={classes.h6}
        noWrap
        onClick={() => router.goTo('/')}
      >
        {translate.getText('Voice to text')}
      </Typography>
    </div>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
}

export default withStyles(styles)(inject('router', 'translate')(observer(Header)));
