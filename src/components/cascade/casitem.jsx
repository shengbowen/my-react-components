import React, { Component } from 'react';

class Casitem extends Component {

  render() {
    const { data } = this.props;
    return (
      <li className="casitem active">{ data.label }
        <i className="casitem-icon"> > </i>
      </li>
    );
  }
}

export default Casitem;