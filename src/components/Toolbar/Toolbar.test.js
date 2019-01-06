import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import ViewStore from '../../stores/ViewStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<Toolbar translate={ new TranslateStore() } view={ new ViewStore() } routeName={'ª•¶§œ¶∑¶∑¶∑¶∑'} />);
});
