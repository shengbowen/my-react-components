import React, { Component } from 'react';

import Casitem from './casitem';

class Caspanel extends Component {
  render() {
    return (
      <div className="caspanel-wrap">
        <ul className="caspanel-menu">
          <Casitem />
          <Casitem />
          <Casitem />
        </ul>
        <div className="caspanel-wrap">
          <ul className="caspanel-menu">
            <Casitem />
            <Casitem />
            <Casitem />
          </ul>
        </div>
      </div>
    );
  }
}

export default Caspanel;