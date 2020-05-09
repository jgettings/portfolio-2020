import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { save, load } from 'redux-localstorage-simple';
import theme from './theme/reducer';

const localStorageOptions = {
  states: ['theme'],
  namespace: 'jen_gettings',
  disableWarnings: true,
};

const middleware = [
  save(localStorageOptions),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  combineReducers({
    theme,
  }),
  load(localStorageOptions),
  composeEnhancers(applyMiddleware(...middleware)),
);

export default configureStore;
