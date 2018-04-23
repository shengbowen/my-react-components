import React, { Component } from 'react';
import Cascade from '../components/cascade/cascade';

import AddForm from './form';
import mockData from '../components/cascade/mock';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value)
  }

  render() {
    return (
      <div>
        <AddForm data={this.props.data}/>
        <Cascade separator="/" />
      </div>
    );
  }
}

Component.defaultProps = {
  data: mockData,
}

export default App;