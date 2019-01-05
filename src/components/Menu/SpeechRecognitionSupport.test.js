import React from 'react';
import { shallow } from 'enzyme';
import SpeechRecognitionSupport from './SpeechRecognitionSupport';
import SettingsStore from '../../stores/SettingsStore';
import TranslateStore from '../../stores/TranslateStore';

it('renders without crashing', () => {
  shallow(<SpeechRecognitionSupport settings={ new SettingsStore() } translate={ new TranslateStore() } />);
});
