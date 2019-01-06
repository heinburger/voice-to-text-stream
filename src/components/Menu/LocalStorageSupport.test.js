import React from 'react';
import { shallow } from 'enzyme';
import LocalStorageSupport from './LocalStorageSupport';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<LocalStorageSupport settings={ new SettingsStore() } translate={ new TranslateStore() }  />);
});
