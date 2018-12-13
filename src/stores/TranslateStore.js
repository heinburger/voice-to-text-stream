import { decorate, computed } from 'mobx';

class TranslateStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  translations = { // <-- can replace with json later
    'Voice to text': {
      'de-DE': 'Stimme zum Text',
    },
  };

  getText = (key= '') => {
    if (this.translations[key] && this.translations[key][this.language]) {
      return this.translations[key][this.language];
    }
    return key;
  }

  // OBSERVABLES................................................................

  // COMPUTEDS..................................................................
  get language() {
    return this.appStore.settings.language
  }
  // ACTIONS....................................................................

}

decorate(TranslateStore, {
  language: computed,
});

export default TranslateStore;
