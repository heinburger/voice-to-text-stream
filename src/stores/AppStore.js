import { configure } from 'mobx';

import ViewStore from './ViewStore';
import RouterStore from './RouterStore';
import TranslateStore from './TranslateStore';
import SettingsStore from './SettingsStore';

configure({ enforceActions: 'observed' });

export default class AppStore {
  constructor() {
    this.view = new ViewStore(this);
    this.router = new RouterStore(this);
    this.translate = new TranslateStore(this);
    this.settings = new SettingsStore(this);
  }
}
