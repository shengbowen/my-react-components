import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';
import './index.css';
import './reset.css';
import Home from './view/home';
import Demo from './view/demo';

const { Header, Content, Sider } = Layout;

const routes = [
  {
    path: '/',
    exact: true,
    main: Home
  },
  {
    path: '/demo',
    main: Demo
  }
];

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter style={{ height: '100%' }}>
      <Layout style={{ height: '100%' }}>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text"><Link to="/" style={{width: '80%', display: 'inline-block'}}>Home</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text"><Link to="/demo" style={{width: '80%', display: 'inline-block'}}>demo</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0,textAlign: 'center' }} >
            级联菜单demo
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100%' }}>
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </Content>
        </Layout>
      </Layout>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));


// ReactDOM.render(
//   <HashRouter>
//     <div style={{ display: 'flex', padding: '30px 20px' }}>
//       <div style={{
//         padding: '10px',
//         width: '20%',
//         background: '#f0f0f0'
//       }}>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/demo">demo</Link></li>
//         </ul>
//       </div>
//       <div style={{ flex:1, padding: '10px'}}>
//         {
//           routes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               component={route.main}
//             />
//           ))
//         }
//       </div>
//     </div>
//   </HashRouter>
//   , document.getElementById('root'));
