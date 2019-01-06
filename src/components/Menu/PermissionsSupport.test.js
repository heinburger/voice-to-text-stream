import React from 'react';
import { shallow } from 'enzyme';
import PermissionsSupport from './PermissionsSupport';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<PermissionsSupport settings={ new SettingsStore() } translate={ new TranslateStore() }  />);
});
