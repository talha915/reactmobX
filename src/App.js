import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import {Provider} from 'mobx-react';
import BirdStore from './stores/BirdStore';

class App extends Component {
  render() {
    return (
      <Provider BirdStore={BirdStore}>
          <Main/>
      </Provider>
    );
  }
}

export default App;
