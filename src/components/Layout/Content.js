import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: Object.assign({}, theme.mixins.toolbar, {
    flex: '0 0 auto',
  }),
  main: {
    backgroundColor: theme.palette.background.default,
    flex: '1 1 auto',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
  },
})

const Content = ({ classes, children }) => (
  <main className={classes.main}>
    <div className={classes.toolbar} />
    <div className={classes.content}>
      {children}
    </div>
  </main>
)

Content.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content);
