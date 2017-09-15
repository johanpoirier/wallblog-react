import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {loadItems} from './actions/items';
import configureStore from './store/configureStore';

import App from './components/App';

const fakePic = {
  id: 1,
  description: 'plop',
  file: 'polp.jpg'
};

let store = configureStore({ items: [fakePic] });
store.dispatch(loadItems());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
);
