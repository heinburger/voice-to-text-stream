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
  h6: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary[theme.palette.type],
      textDecoration: 'underline'
    }
  },
});

const StyledWrapper = withStyles(styles)(({ classes, children }) => (
  <div className={classes.wrapper}>
    <div className={classes.drawerHeader}>
      <span role='img' aria-label='robot' style={{ fontSize: '24px', paddingRight: '5px' }}>🤖</span>
      {children}
    </div>
  </div>
));

const StyledH6 = withStyles(styles)(({ classes, ...rest }) => (
  <Typography
    variant='h6'
    className={classes.h6}
    noWrap
    {...rest}
  />
));

const Header = ({ classes, router, translate }) => (
  <StyledWrapper>
    <StyledH6 onClick={() => router.goTo('/')}>
      {`${translate.getText('Voice to text')}`}
    </StyledH6>
  </StyledWrapper>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  translate: PropTypes.object.isRequired,
}

export default inject('router', 'translate')(observer(Header));
