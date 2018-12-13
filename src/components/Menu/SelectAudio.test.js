import React from 'react';
import { shallow } from 'enzyme';
import SelectAudio from './SelectAudio';
import SettingsStore from '../../stores/SettingsStore';

it('renders without crashing', () => {
  shallow(<SelectAudio settings={ new SettingsStore() } />);
});
