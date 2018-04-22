import React, { Component } from 'react';

import Casitem from './casitem';

class Caspanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sublist: []
    };
  }

  render() {
    const { data } = this.props;

    return (
      <div className="caspanel-wrap">
        <ul className="caspanel-menu">
          { data.map((item) => <Casitem data={ item }/>) }
        </ul>
      </div>
    );
  }
}

export default Caspanel;