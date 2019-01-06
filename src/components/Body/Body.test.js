import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';
import SettingsStore from '../../stores/SettingsStore'

it('renders without crashing', () => {
  shallow(<Body settings={ new SettingsStore() } />);
});
