import React, { Component } from 'react';

import Casitem from './casitem';

class Caspanel extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      sublist: props.data[0].children
    };
  }

  render() {
    const { data } = this.props;
    const { sublist } = this.state;

    return (
      <div className="caspanel-wrap">
        <ul className="caspanel-menu">
          { data.map((item) => <Casitem data={ item }/>) }
        </ul>
        { sublist && sublist.length && <Caspanel data={sublist} />}
      </div>
    );
  }
}

export default Caspanel;