import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

const rootApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(rootApp, document.querySelector('#root'));