import React from 'react';
import { mount } from 'enzyme';
import MicButton from './MicButton';
import SpeechRecognitionStore from '../../stores/SpeechRecognitionStore';

it('renders without crashing', () => {
  mount(<MicButton speechRecognition={ new SpeechRecognitionStore() } />);
});
