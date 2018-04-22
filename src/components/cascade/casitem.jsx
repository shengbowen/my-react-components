import React, { Component } from 'react';

class Casitem extends Component {

  render() {
    const { data, selected } = this.props;

    const clstring = `casitem${data.value === selected ? ' active' : ''}`;

    return (
      <li className={ clstring } onClick={ () => this.props.handleSelect(data.value) }>
        { data.label }
        <i className="casitem-icon"> > </i>
      </li>
    );
  }
}

export default Casitem;