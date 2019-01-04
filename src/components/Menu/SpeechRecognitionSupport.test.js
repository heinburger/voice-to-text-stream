import React from 'react';
import { shallow } from 'enzyme';
import SpeechRecognitionSupport from './SpeechRecognitionSupport';
import SettingsStore from '../../stores/SettingsStore';

it('renders without crashing', () => {
  shallow(<SpeechRecognitionSupport settings={ new SettingsStore() } />);
});
