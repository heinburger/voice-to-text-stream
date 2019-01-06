import { decorate, observable, action } from 'mobx';
import {
  getBrowserSpeechRecognition,
} from '../utils/browser'

class SpeechRecognitionStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  initRecognition = () => {
    const BrowserSpeechRecognition = getBrowserSpeechRecognition();
    this.recognition = new BrowserSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = this.appStore.settings.language;

    this.recognition.onstart = (event) => {
      console.log('SpeechRecognition.onstart');
    }

    this.recognition.onresult = (event) => {
      console.log('SpeechRecognition.onresult');
      if (this.appStore.view.recording) {
        let guess = '';
        let output = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            output = event.results[i][0].transcript
          } else {
            guess = i > 0
              ? guess + event.results[i][0].transcript
              : event.results[i][0].transcript;
          }
        }
        this.setOutput(output);
        this.setGuess(guess);
      }
    }

    this.recognition.onspeechend = () => {
      console.log('SpeechRecognition.onspeechend');
    }

    this.recognition.onerror = (event) => {
      console.log('SpeechRecognition.onerror');
    }

    this.recognition.onaudiostart = (event) => {
      console.log('SpeechRecognition.onaudiostart');
    }

    this.recognition.onaudioend = (event) => {
      console.log('SpeechRecognition.onaudioend');
    }

    this.recognition.onend = (event) => {
      console.log('SpeechRecognition.onend');
      this.stopRecognition();
    }

    this.recognition.onnomatch = (event) => {
      console.log('SpeechRecognition.onnomatch');
    }

    this.recognition.onsoundstart = (event) => {
      console.log('SpeechRecognition.onsoundstart');
    }

    this.recognition.onsoundend = (event) => {
      console.log('SpeechRecognition.onsoundend');
    }

    this.recognition.onspeechstart = (event) => {
      console.log('SpeechRecognition.onspeechstart');
    }
  }

  // OBSERVABLES................................................................
  output = '';
  guess = '';
  lastGuess = '';

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................
  startRecognition = () => {
    if (!this.recognition) {
      this.initRecognition()
    }
    this.output = '';
    this.guess = '';
    this.lastGuess = '';
    this.recognition.start();
    this.appStore.view.startRecording();
  }

  stopRecognition = () => {
    if (this.guess) {
      this.appStore.view.addText(this.guess + ' ');
    }
    this.appStore.view.setGuessText('');
    this.output = '';
    this.guess = '';
    this.appStore.view.stopRecording();

    try {
      this.recognition.stop()
    } catch (DOMException) {
      // ...
    }
  }

  setOutput = (output) => {
    this.output = output;
    this.guess = '';
    this.appStore.view.addText(output);
  }

  setGuess = (guess) => {
    this.guess = guess;
    this.appStore.view.setGuessText(this.guess);
  }
}

decorate(SpeechRecognitionStore, {
  output: observable,
  guess: observable,
  startRecognition: action,
  stopRecognition: action,
  setOutput: action,
  setGuess: action,
});

export default SpeechRecognitionStore;
