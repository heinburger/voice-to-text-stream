import { decorate, observable, action } from 'mobx';

import { getLang, setLang } from '../utils'

class SpeechRecognitionStore {
  constructor(appStore) {
    this.appStore = appStore;
    const BrowserSpeechRecognition = typeof window !== 'undefined' && (
      window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition ||
      window.oSpeechRecognition
    );

    if (BrowserSpeechRecognition) {
      this.recognition = new BrowserSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = this.lang;

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
    } else {
      console.error('Speech recognition not supported');
    }
  }

  // OBSERVABLES................................................................
  output = '';
  guess = '';
  lastGuess = '';
  lang = getLang();

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................
  startRecognition = () => {
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
  setLang = (lang) => {
    setLang(lang);
    this.lang = lang;
    if (this.recognition) {
      this.recognition.lang = lang;
    }
  }
}

decorate(SpeechRecognitionStore, {
  output: observable,
  guess: observable,
  lang: observable,
  startRecognition: action,
  stopRecognition: action,
  setOutput: action,
  setGuess: action,
  setLang: action,
});

export default SpeechRecognitionStore;
