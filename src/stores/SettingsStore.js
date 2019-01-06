import { decorate, observable, action } from 'mobx';
import {
  checkIfOnline,
  setOnlineListener,
  localStorageSupported,
  getLocalStorageByKey,
  setLocalStorageByKey,
  speechRecognitionSupported,
  permissionsSupported,
  requestAudioPermission,
  checkAudioPermission,
  setAudioPermissionListener,
  audioSupported,
  getAudioDevices,
  setAudioDeviceListener,
} from '../utils/browser'

const DEFAULT_LANGUAGE = 'de-DE';

class SettingsStore {
  constructor(appStore) {
    this.appStore = appStore;
    setOnlineListener(this.setOnlineStatus);

    this.localStorageSupported = localStorageSupported;
    this.speechRecognitionSupported = speechRecognitionSupported;
    this.audioSupported = audioSupported;
    this.permissionsSupported = permissionsSupported;

    this.requestAudioPermission = () => requestAudioPermission().then(this.setAudioPermission);
    this.updateAudioPermission = () => checkAudioPermission().then(this.setAudioPermission)
    this.updateAudioPermission();
    setAudioPermissionListener(this.updateAudioPermission);

    this.updateAudioDevices = () => getAudioDevices().then(this.setAudioDevices);
    this.updateAudioDevices();
    setAudioDeviceListener(this.updateAudioDevices);
  }

  // OBSERVABLES................................................................
  isOnline = checkIfOnline();
  language = getLocalStorageByKey('language') || DEFAULT_LANGUAGE;
  audioSource = 'default';
  audioDevices = [];
  audioPermission = true;

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................
  setOnlineStatus = (status = false) => {
    this.isOnline = status;
  }

  setLanguage = (language = DEFAULT_LANGUAGE) => {
    setLocalStorageByKey('language', language);
    this.language = language;
    if (this.appStore.speechRecognition.recognition) {
      this.appStore.speechRecognition.recognition.lang = language;
    }
  }

  setAudioSource = (deviceId = '') => {
    this.audioSource = deviceId;
  }

  setAudioDevices = (devices = []) => {
    this.audioDevices = devices;
  }

  setAudioPermission = (permission = false) => {
    this.audioPermission = permission;
    this.updateAudioDevices();
  }
}

decorate(SettingsStore, {
  isOnline: observable,
  language: observable,
  audioSource: observable,
  audioDevices: observable,
  audioPermission: observable,
  setOnlineStatus: action,
  setLanguage: action,
  setAudioSource: action,
  setAudioDevices: action,
  setAudioPermission: action,
});

export default SettingsStore;
