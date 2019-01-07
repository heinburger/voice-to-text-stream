import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import RouterStore from '../../stores/RouterStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<Header router={ new RouterStore() } translate={ new TranslateStore() } />);
});
