import React from 'react';
import { mount } from 'enzyme';
import MicButton from './MicButton';
import SpeechRecognitionStore from '../../stores/SpeechRecognitionStore';
import AppStore from '../../stores/AppStore';

it('renders without crashing', () => {
  mount(<MicButton speechRecognition={ new SpeechRecognitionStore(new AppStore()) } />);
});
