import React from 'react';
import { shallow } from 'enzyme';
import SelectLang from './SelectLang';
import SettingsStore from '../../stores/SettingsStore';

it('renders without crashing', () => {
  shallow(<SelectLang settings={ new SettingsStore() } />);
});
