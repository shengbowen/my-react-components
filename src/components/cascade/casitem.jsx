import React, { Component } from 'react';

class Casitem extends Component {

  render() {
    const { data, selected, hasChild } = this.props;

    const clstring = `casitem${selected ? ' active' : ''}`;

    return (
      <li className={ clstring } onClick={ this.props.handleSelect }>
        { data.label }
        { hasChild && <i className="casitem-icon"> > </i> }
        { this.props.children }
      </li>
    );
  }
}

export default Casitem;