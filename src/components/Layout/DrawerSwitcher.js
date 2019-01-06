import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import Drawer from './Drawer';
import TempDrawer from './TempDrawer';

const DrawerSwitcher = ({ view, children }) => view.showTempDrawer
  ? <TempDrawer>{children}</TempDrawer>
  : <Drawer>{children}</Drawer>;

DrawerSwitcher.propTypes = {
  view: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default inject('view')(observer(DrawerSwitcher));
