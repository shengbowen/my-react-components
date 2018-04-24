import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cascade from '../components/cascade/cascade';

import AddForm from './form';
import mockData from '../components/cascade/mock';

class Demo extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value)
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <AddForm data={ data }/>
        <Cascade separator="/" data={ data }/>
      </div>
    );
  }
}

Component.defaultProps = {
  data: [],
}

const mapStateToProps = (state) => {
  return {
    ...state.data
  }
};

export default connect(mapStateToProps)(Demo);