import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Caspanel from './caspanel';
import mockData from './mock';

import './style.css';

class Cascade extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cascade">
        <input type="text" placeholder="请输入"/>
        <div className="dropdown">
          <Caspanel {...this.props}/>
        </div>
      </div>
    );
  }
}

Cascade.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Cascade.defaultProps = {
  data: mockData,
};

export default Cascade;