import React from 'react';
import { shallow } from 'enzyme';
import SelectLang from './SelectLang';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<SelectLang settings={ new SettingsStore() } translate={ new TranslateStore() }/>);
});
