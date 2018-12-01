import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import reducers from './reducers';
import Main from './Main.js';

/** SAGA */
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default class App extends React.Component {

  render() {

    console.log("App render");

    return (
      <Provider store={ store }>
        <Main />
      </Provider>);
  }
}
