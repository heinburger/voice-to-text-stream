import React from 'react';
import { shallow } from 'enzyme';
import OnlineStatus from './OnlineStatus';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<OnlineStatus settings={ new SettingsStore() } translate={ new TranslateStore() }  />);
});
