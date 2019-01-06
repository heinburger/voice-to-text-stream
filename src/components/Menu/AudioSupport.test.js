import React from 'react';
import { shallow } from 'enzyme';
import AudioSupport from './AudioSupport';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<AudioSupport settings={ new SettingsStore() } translate={ new TranslateStore() }  />);
});
