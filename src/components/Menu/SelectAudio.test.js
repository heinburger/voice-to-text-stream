import React from 'react';
import { shallow } from 'enzyme';
import SelectAudio from './SelectAudio';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<SelectAudio settings={ new SettingsStore() } translate={ new TranslateStore() } />);
});
