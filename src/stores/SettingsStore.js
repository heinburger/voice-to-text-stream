import { decorate, observable, action } from 'mobx';

import { getLang, setLang } from '../utils/language'

class SettingsStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  language = getLang();

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................
  setLanguage = (lang) => {
    setLang(lang);
    this.lang = lang;
    if (this.recognition) {
      this.recognition.lang = lang;
    }
  }
}

decorate(SettingsStore, {
  language: observable,
  setLanguage: action,
});

export default SettingsStore;
