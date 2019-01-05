import { decorate, observable, computed, action } from 'mobx';
import {
  localStorageSupported,
  getLocalStorageByKey,
  setLocalStorageByKey,
  speechRecognitionSupported,
  audioSupported,
  getAudioPermission,
  requestAudioPermission,
  setAudioPermissionListener,
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
    this.updateAudioPermission = () => getAudioPermission().then(this.setAudioPermission);
    this.requestAudioPermission = () => requestAudioPermission();
    this.updateAudioPermission();
    setAudioPermissionListener(this.updateAudioPermission);
    this.updateAudioDevices = () => getAudioDevices().then(this.setAudioDevices);
    this.updateAudioDevices();
    setAudioDeviceListener(this.updateAudioDevices);
  }

  // OBSERVABLES................................................................
  language = getLocalStorageByKey('language') || DEFAULT_LANGUAGE;
  audioSource = 'default';
  audioDevices = [];
  audioPermission = {};

  // COMPUTEDS..................................................................
  get audioPermissionGranted () {
    return this.audioPermission.state === 'granted'
  }

  // ACTIONS....................................................................
  setLanguage = (language = DEFAULT_LANGUAGE) => {
    setLocalStorageByKey('language', language);
    this.language = language;
    // if (this.recognition) {
    //   this.recognition.lang = lang;
    // }
  }

  setAudioSource = (deviceId = '') => {
    this.audioSource = deviceId;
  }

  setAudioDevices = (devices = []) => {
    this.audioDevices = devices;
  }

  setAudioPermission = (permission = {}) => {
    this.audioPermission = permission;
    this.updateAudioDevices();
  }
}

decorate(SettingsStore, {
  language: observable,
  audioSource: observable,
  audioDevices: observable,
  audioPermission: observable,
  audioPermissionGranted: computed,
  setLanguage: action,
  setAudioSource: action,
  setAudioDevices: action,
  setAudioPermission: action,
});

export default SettingsStore;
