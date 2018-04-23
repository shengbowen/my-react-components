import React, { Component } from 'react';

import Casitem from './casitem';

class Caspanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sublist: [],
      selectedIds: [],
      selectedLables: [],
      depthLevel: 0,
      hasChild: true,
    };
    this.handleSelectId = this.handleSelectId.bind(this);
  }

  handleSelectId(selected, depthLevel, label, hasChild) {
    return (e) => {
      const updateArray = this.state.selectedIds.slice(0, depthLevel);
      const updateLabel = this.state.selectedLables.slice(0, depthLevel);

      updateArray[depthLevel] = selected;
      updateLabel[depthLevel] = label;

      this.setState({
        selectedIds: updateArray,
        depthLevel: depthLevel,
        selectedLables: updateLabel,
        hasChild
      });
      this.props.handleSelectChange(updateArray, updateLabel);
      e.stopPropagation();
    }
  }

  /**
   * 递归渲染级联选择器列表
   *
   * @param {array} options  数据列表
   * @param {number} [depthLevel=0] 当前选中的层级
   * @memberof Caspanel
   */
  renderMenu(options, depthLevel = 0) {

    const menu = options.map(option => {
      const hasChild = option.children && option.children.length > 0;

      let subMenu;
      // debugger
      if ((this.state.selectedIds[depthLevel] === option.value) && hasChild) {
        const newDepthLevel = depthLevel + 1;
        // debugger;
        subMenu = this.renderMenu(option.children, newDepthLevel);
      }

      return (
        <Casitem data={ option }
                        selected={ this.state.selectedIds[depthLevel] === option.value }
                        handleSelect={ this.handleSelectId(option.value, depthLevel, option.label, hasChild) }
                        key={ option.value }
                        hasChild={ hasChild }
                        handleClose={this.props.handleClose}
                        >
          { subMenu }
        </ Casitem>
      )

    });

    return (
      <ul className="caspanel-menu" style={{left: depthLevel === 0 ? 0 : '100%' }}>
        { menu }
      </ul>
    );
  }

  render() {
    const { data } = this.props;
    const { sublist, selected } = this.state;

    const width = this.state.selectedIds.length === 0 ? '100px' : `${100 * (this.state.hasChild ? this.state.selectedIds.length + 1 : this.state.selectedIds.length)}px`;

    return (
      <div className="caspanel-wrap" style={{ width }}>
        { this.renderMenu(data) }
      </div>
    );
  }

}

export default Caspanel;