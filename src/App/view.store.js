import { decorate, observable, action, computed } from 'mobx';

class ViewStore {
  constructor(appStore) {
    this.appStore = appStore;
  }
  // OBSERVABLES................................................................
  recording = false;
  editing = false;
  text = '';
  guessText = '...';

  // COMPUTEDS..................................................................
  get langSelectDisabled() {
    return this.recording;
  }

  // ACTIONS....................................................................
  startRecording = () => {
    this.recording = true;
  }
  stopRecording = () => {
    this.recording = false;
  }
  setText = (text) => {
    this.text = text;
  }
  addText = (text) => {
    this.text = this.text + text;
  }
  setGuessText = (text) => {
    this.guessText = text || '...';
  }
}

decorate(ViewStore, {
  recording: observable,
  editing: observable,
  text: observable,
  guessText: observable,
  langSelectDisabled: computed,
  toggleRecording: action,
  setText: action,
  setGuessText: action,
});

export default ViewStore;
