import React from 'react';
import { shallow } from 'enzyme';
import LocalStorageSupport from './LocalStorageSupport';
import SettingsStore from '../../stores/SettingsStore';

it('renders without crashing', () => {
  shallow(<LocalStorageSupport settings={ new SettingsStore() } />);
});
