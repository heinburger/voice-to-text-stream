import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import ViewStore from '../../stores/ViewStore';
import TranslateStore from '../../stores/TranslateStore';
import SettingsStore from '../../stores/SettingsStore';

it('renders without crashing', () => {
  shallow(<Toolbar settings={ new SettingsStore() } translate={ new TranslateStore() } view={ new ViewStore() } routeName={'ª•¶§œ¶∑¶∑¶∑¶∑'} />);
});
