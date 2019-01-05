import { decorate, observable, action } from 'mobx';
import {
  localStorageSupported,
  getLocalStorageByKey,
  setLocalStorageByKey,
  speechRecognitionSupported,
  audioSupported,
  getAudioDevices,
  setAudioDeviceListener,
} from '../utils/browser'

const DEFAULT_LANGUAGE = 'de-DE';

class SettingsStore {
  constructor(appStore) {
    this.appStore = appStore;
    this.localStorageSupported = localStorageSupported();
    this.speechRecognitionSupported = speechRecognitionSupported();
    this.audioSupported = audioSupported();
    const updateAudioDevices = () => getAudioDevices().then(this.setAudioDevices);
    updateAudioDevices();
    setAudioDeviceListener(updateAudioDevices);
  }

  // OBSERVABLES................................................................
  language = getLocalStorageByKey('language') || DEFAULT_LANGUAGE;
  audioSource = 'default';
  audioDevices = [];

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................
  setLanguage = (language = DEFAULT_LANGUAGE) => {
    setLocalStorageByKey('language', language);
    this.language = language;
    // if (this.recognition) {
    //   this.recognition.lang = lang;
    // }
  }

  setAudioSource = (deviceId) => {
    this.audioSource = deviceId;
  }

  setAudioDevices = (devices = []) => {
    console.log(devices)
    this.audioDevices = devices;
  }
}

decorate(SettingsStore, {
  language: observable,
  audioSource: observable,
  audioDevices: observable,
  setLanguage: action,
  setAudioSource: action,
  setAudioDevices: action,
});

export default SettingsStore;
