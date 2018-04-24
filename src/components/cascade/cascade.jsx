import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Caspanel from './caspanel';

import './style.css';

class Cascade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      selectedIds: [],
      selectLabels: [],
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleOpen() {
    this.setState({
      show: true,
    })
  }

  handleSelectChange(seleted, labels) {
    this.setState({
      selectedIds: seleted,
      selectLabels: labels
    });
  }

  clickOutSide(e) {
    if (!this.cas.contains(e.target)) {
      this.handleClose();
    }
    return;
  }

  componentDidMount() {
    document.addEventListener('click', this.clickOutSide);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutSide);
  }

  render() {
    return (
      <div className="cascade" ref={ cas => this.cas = cas }>
        <input type="text" placeholder="请输入" onFocus={ this.handleOpen } value={ this.state.selectLabels.join(this.props.separator) }/>
        <div className="dropdown" style={{ display: this.state.show ? 'block' : 'none' }}>
          <Caspanel {...this.props} handleClose={this.handleClose} handleSelectChange={this.handleSelectChange}/>
        </div>
      </div>
    );
  }
}

Cascade.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  separator: PropTypes.string.isRequired,
};

Cascade.defaultProps = {
  data: [],
  separator: '/'
};

export default Cascade;