import React, { Component } from 'react';
import PullRefresh from '../components/pullRefresh/PullRefresh';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleChange(value) {
    console.log(value)
  }

  getData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
      dataArr.push(i);
    }
    return dataArr;
  }

  handleRefresh(cb) {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
      cb();
    }, 1500);
  }

  render() {
    const { data } = this.props;
    return (
      <div style={{ width: '300px', height: '600px', overflow: 'auto' }}>
        <PullRefresh container="container" onRefresh={this.handleRefresh} refreshing={ this.state.refreshing }>
          {
            this.getData().map(item => (
              <div style={{ padding: '10px', borderBottom: '1px solid #3e3e3e'}} key={item}>{item}</div>
            ))
          }
        </PullRefresh>
      </div>
    );
  }
}

Component.defaultProps = {
  data: [],
}

export default Demo;