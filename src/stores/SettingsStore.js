import { decorate, observable, action } from 'mobx';
import {
  localStorageSupported,
  getLocalStorageByKey,
  setLocalStorageByKey,
  speechRecognitionSupported
} from '../utils/browser'

const DEFAULT_LANGUAGE = 'de-DE';
const DEFAULT_AUDIO_SOURCE = 'default';

class SettingsStore {
  constructor(appStore) {
    this.appStore = appStore;
    this.localStorageSupported = localStorageSupported();
    this.speechRecognitionSupported = speechRecognitionSupported();
  }

  // OBSERVABLES................................................................
  language = getLocalStorageByKey('language') || DEFAULT_LANGUAGE;
  audioSource = DEFAULT_AUDIO_SOURCE;

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................
  setLanguage = (language = DEFAULT_LANGUAGE) => {
    setLocalStorageByKey('language', language);
    this.language = language;
    // if (this.recognition) {
    //   this.recognition.lang = lang;
    // }
  }

  setAudioSource = (audioSource) => {
    this.audioSource = audioSource;
  }
}

decorate(SettingsStore, {
  language: observable,
  audioSource: observable,
  setLanguage: action,
  setAudioSource: action,
});

export default SettingsStore;
