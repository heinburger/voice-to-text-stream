import { configure } from 'mobx';

import SpeechRecognitionStore from './speechRecognition.store.js'
import ViewStore from './view.store.js'

configure({ enforceActions: 'observed' });

export default class AppStore {
  constructor() {
    this.speechRecognition = new SpeechRecognitionStore(this);
    this.view = new ViewStore(this);
  }
}
