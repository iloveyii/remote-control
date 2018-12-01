import React from 'react';
import { Provider, connect } from 'react-redux';

import Main from './Main.js';

export default class App extends React.Component {

  render() {

    console.log("App render");

    return (
      <Provider store={null}>
        <Main />
      </Provider>);
  }
}
