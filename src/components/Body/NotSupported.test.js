import React from 'react';
import { shallow } from 'enzyme';
import NotSupported from './NotSupported';
import TranslateStore from '../../stores/TranslateStore'

it('renders without crashing', () => {
  shallow(<NotSupported translate={ new TranslateStore() } />);
});
