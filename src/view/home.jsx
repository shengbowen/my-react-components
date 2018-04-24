import React, { Component } from 'react';
import Cascade from '../components/cascade/cascade';
import mockData from '../components/cascade/mock';

class Home extends Component {
  render() {
    return (
      <Cascade data={ mockData }/>
    );
  }
}

export default Home;
