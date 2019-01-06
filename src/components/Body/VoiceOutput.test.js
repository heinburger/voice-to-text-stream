import React from 'react';
import { shallow } from 'enzyme';
import VoiceOutput from './VoiceOutput';
import AppStore from '../../stores/AppStore';
import ViewStore from '../../stores/ViewStore';
import TranslateStore from '../../stores/TranslateStore';
import SpeechRecognitionStore from '../../stores/SpeechRecognitionStore';

it('renders without crashing', () => {
  shallow(<VoiceOutput speechRecognition={ new SpeechRecognitionStore(new AppStore()) } translate={ new TranslateStore() } view={ new ViewStore() } />);
});
