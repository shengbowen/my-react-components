import React, { Component } from 'react';
import Cascade from './components/cascade/cascade';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Cascade separator="/" />
    );
  }
}

export default App;
