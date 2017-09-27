
import React, { Component } from 'react';
import ConnectState from './ConnectState';
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectState />
      </Provider>
    );
  }
}

export default App;
