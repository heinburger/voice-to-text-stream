import React from 'react';
import { shallow } from 'enzyme';
import VoiceControls from './VoiceControls';
import AppStore from '../../stores/AppStore';
import ViewStore from '../../stores/ViewStore';
import TranslateStore from '../../stores/TranslateStore';
import SpeechRecognitionStore from '../../stores/SpeechRecognitionStore';
import SettingsStore from '../../stores/SettingsStore';

it('renders without crashing', () => {
  shallow(<VoiceControls settings={ new SettingsStore() } speechRecognition={ new SpeechRecognitionStore(new AppStore()) } translate={ new TranslateStore() } view={ new ViewStore() } />);
});
