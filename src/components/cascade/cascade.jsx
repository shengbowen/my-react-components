import React, { Component } from 'react';

import Caspanel from './caspanel';

import './style.css';

class Cascade extends Component {
  render() {
    return (
      <div className="cascade">
        <input type="text" placeholder="请输入"/>
        <div className="dropdown">
          <Caspanel />
        </div>
      </div>
    );
  }
}

export default Cascade;