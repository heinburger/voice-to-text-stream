import { decorate, observable, action, computed } from 'mobx';

import { getScreenWidth, getScreenHeight } from '../utils/browser';

class ViewStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  recording = false;
  text = '';
  guessText = '';
  tempDrawerOpen = false;
  screenWidth = getScreenWidth();
  screenHeight = getScreenHeight();
  lightThemeActive = false;

  // COMPUTEDS..................................................................
  get showTempDrawer() {
    return this.screenWidth < 960;
  }

  get inputRows() {
    // const switch = screenWidth < 464 ? 2.5 : 1;
    return (this.screenHeight - 130) / 19;
  }

  // ACTIONS....................................................................
  onScreenResize = () => {
    this.screenWidth = getScreenWidth();
    this.screenHeight = getScreenHeight();
  };

  toggleTempDrawer = () => {
    this.tempDrawerOpen = !this.tempDrawerOpen;
  };

  closeTempDrawer = () => {
    this.tempDrawerOpen = false;
  };

  toggleLightTheme = () => {
    this.lightThemeActive = !this.lightThemeActive;
  };

  setText = (text) => {
    this.text = text;
  };

  clearText = () => {
    this.text = '';
  };

  addText = (text) => {
    this.text = this.text + text;
  };

  setGuessText = (text) => {
    this.guessText = text || '...';
  };

  startRecording = () => {
    this.recording = true;
  };

  stopRecording = () => {
    this.recording = false;
  };
}

decorate(ViewStore, {
  recording: observable,
  text: observable,
  guessText: observable,
  tempDrawerOpen: observable,
  screenWidth: observable,
  screenHeight: observable,
  lightThemeActive: observable,
  showTempDrawer: computed,
  inputRows: computed,
  onScreenResize: action,
  toggleTempDrawer: action,
  closeTempDrawer: action,
  toggleLightTheme: action,
  setText: action,
  clearText: action,
  setGuessText: action,
  startRecording: action,
  stopRecording: action,
});

export default ViewStore;
