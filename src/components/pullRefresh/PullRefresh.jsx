import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class PullRefresh extends Component {
  constructor(props) {
    super(props);

    // this.refreshing = false;
    this.joinRefresh = false;
    this.percentage = 0;
    this.dragStart = null;
    this.changeOneTimeFlag = 0;

    this.state = {
      pullText: '下拉刷新',
      arrowClass: 'down',
      showArrow: false,
      showLoadding: false,
    }

    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
  }

  componentDidMount() {
    const wraper = this.container.parentElement;
    this.clientHeight = wraper.clientHeight;
    this.bindEvents();
  }

  touchStart(event) {
    if (this.props.refreshing) {
      event.preventDefault();
      return;
    }

    const touch = event.changedTouches[0];
    this.dragStart = touch.clientY;
    this.container.style.webkitTransition = 'none';
  }

  touchMove(event) {
    if (this.props.refreshing || this.dragStart === null) {
      event.preventDefault();
      return;
    }

    const touch = event.changedTouches[0];
    const percentage = this.percentage = (touch.clientY - this.dragStart) / this.clientHeight;
    const translateY = percentage * this.props.moveCount;
    const { dragThreshold, beforePull } = this.props;

    if (this.container.scrollTop <= 0) {
      if (percentage > 0) {
        if (!this.changeOneTimeFlag) {
          this.changeOneTimeFlag = true;
          beforePull();
        }

        if (percentage < dragThreshold) {
          this.setState({
            pullText: '下拉刷新',
            arrowClass: 'down',
          });
        } else {
          this.setState({
            pullText: '释放刷新',
            arrowClass: 'up',
          });
        }

        this.setState({
          showArrow: true,
          showLoadding: false,
        });
        this.joinRefresh = true;
      } else {
        this.joinRefresh = false;
      }

      this.container.style.webkitTransform = 'translate3d(0,' + translateY + 'px,0)';
    } else {
      this.joinRefresh = false;
    }
  }

  touchEnd(event) {
    if (this.percentage <= 0) return;
    if (this.props.refreshing) {
      event.preventDefault();
      return;
    }

    this.container.style.webkitTransition = '300ms';
    if (this.joinRefresh) {
      this.setState({
        pullText: '正在刷新'
      })
      this.props.onRefresh(() => {
        this.setState({
          pullText: '刷新成功'
        })
      });
    }

    this.setState({
      showArrow: false,
    })
    this.joinRefresh = false;
    this.changeOneTimeFlag = false;
  }

  bindEvents() {
    this.container.addEventListener('touchstart', this.touchStart);
    this.container.addEventListener('touchmove', this.touchMove);
    this.container.addEventListener('touchend', this.touchEnd);
  }

  showIcon() {
    const { show, arrowClass } = this.state;
    return !this.props.refreshing ? <div id='arrowIcon' className={arrowClass}></div> : <div className="spinner" ref={ icon => this.pullIcon = icon }></div>
  }

  render() {
    const transform = this.props.refreshing ? 'translate3d(0, 50px, 0)' : 'translate3d(0, 0, 0)';

    return (
      <div className="containr" ref={ con => this.container = con } style={{ transform }}>
        <div className="pull-down-content">
          { this.showIcon() }
          <span ref={ text => this.pullText = text } style={{ fontSize: '16px'}}>{ this.state.pullText }</span>
        </div>
        { this.props.children }
      </div>
    )
  }
}

PullRefresh.defaultProps = {
  moveCount: 300,
  dragThreshold: 0.3,
  refreshing: false,
  beforePull: () => {},
  afterPull: () => {},
  onRefresh: () => {}
}

PullRefresh.proptypes = {
  moveCount: PropTypes.number,
  dragThreshold: PropTypes.number,
  refreshing: PropTypes.bool,
  beforePull: PropTypes.func,
  afterPull: PropTypes.func,
  onRefresh: PropTypes.fun
}

export default PullRefresh;