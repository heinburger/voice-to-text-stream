import { decorate } from 'mobx';

class TranslateStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  translations = { // <-- can replace with json later
    'Voice to text': {
      'de-DE': 'Stimme zum Text',
    },
    'Language': {
      'de-DE': 'Sprache',
    },
    'Online status': {
      'de-DE': 'Online Status',
    },
    'localStorage support': {
      'de-DE': 'Speicherunterstützung',
    },
    'Speech recognition support': {
      'de-DE': 'Spracherkennungsunterstützung',
    },
    'Audio support': {
      'de-DE': 'Audio-Unterstützung',
    },
    'Audio permission': {
      'de-DE': 'Audio-Erlaubnis',
    },
    'Audio source': {
      'de-DE': 'Audio quelle',
    },
    'Default': {
      'de-DE': 'Standard',
    },
    'Unknown': {
      'de-DE': 'Unbekannte',
    },
    'Request': {
      'de-DE': 'Anfordern',
    },
  };

  getText = (key= '') => {
    if (this.translations[key] && this.translations[key][this.appStore.settings.language]) {
      return this.translations[key][this.appStore.settings.language];
    }
    return key;
  }

  // OBSERVABLES................................................................

  // COMPUTEDS..................................................................

  // ACTIONS....................................................................

}

decorate(TranslateStore, {

});

export default TranslateStore;
