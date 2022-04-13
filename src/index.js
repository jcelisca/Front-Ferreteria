import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.sass';
import { Provider } from 'react-redux';
import store from './redux/reducers/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);