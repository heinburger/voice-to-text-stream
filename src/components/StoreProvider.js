import React from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import PropTypes from 'prop-types';

// this component dictates which stores can be injected into app components
const StoreProvider = ({ store, children }) => (
  <MobxProvider
    view={store.view}
    router={store.router}
    translate={store.translate}
    settings={store.settings}
    speechRecognition={store.speechRecognition}
  >
    {children}
  </MobxProvider>
);

StoreProvider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
