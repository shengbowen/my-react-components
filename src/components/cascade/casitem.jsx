import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Casitem extends PureComponent {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleSelect(e);

    if (!this.props.hasChild) this.props.handleClose();
  }

  render() {
    const { data, selected, hasChild } = this.props;

    const clstring = `casitem${selected ? ' active' : ''}`;

    return (
      <li className={ clstring } onClick={ this.handleClick } onMouseEnter={ this.props.handleSelect }>
        { data.label }
        { hasChild && <i className="casitem-icon"> > </i> }
        { this.props.children }
      </li>
    );
  }
}

Casitem.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  hasChild: PropTypes.bool
}

export default Casitem;