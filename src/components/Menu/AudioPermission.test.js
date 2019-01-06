import React from 'react';
import { shallow } from 'enzyme';
import AudioPermission from './AudioPermission';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<AudioPermission settings={ new SettingsStore() } translate={ new TranslateStore() }  />);
});
