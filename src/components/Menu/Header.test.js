import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
<<<<<<< HEAD
import RouterStore from '../../stores/RouterStore'
import TranslateStore from '../../stores/TranslateStore'
=======
import RouterStore from '../../stores/RouterStore';
import TranslateStore from '../../stores/TranslateStore';
>>>>>>> f7cdd51bd12b976fe8cc23d9b511dc379c5126cb

it('renders without crashing', () => {
  shallow(<Header router={ new RouterStore() } translate={ new TranslateStore() } />);
});
