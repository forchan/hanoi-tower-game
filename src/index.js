import React from 'react';
import ReactDOM from 'react-dom';
import './styles/hanoi-tower-game.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
