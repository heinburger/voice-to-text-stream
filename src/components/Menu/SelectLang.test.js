import React from 'react';
import { shallow } from 'enzyme';
import SelectLang from './SelectLang';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  shallow(<SelectLang view={ new ViewStore() } />);
});
