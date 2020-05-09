import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import ThemedApp from './theme/ThemedApp';
import AppBar from './components/AppBar';
import Home from './components/Home';


const App = () => (
  <GlobalErrorBoundary>
    <Provider store={configureStore()}>
      <ThemedApp>
        <AppBar />
        <Home />
      </ThemedApp>
    </Provider>
  </GlobalErrorBoundary>
);

export default hot(App);
