import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Home from './containers/Home';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Menu
          style={{
            backgroundColor: '#86c773',
          }}
        >
          <Menu.Item header>CRYPTOCOIN PORTFOLIO</Menu.Item>
          <Menu.Item exact link to="/" as={NavLink}>
            My Portfolio
          </Menu.Item>
          <Menu.Item link to="/about" as={NavLink}>
            About this App
          </Menu.Item>
        </Menu>

        <div style={{ paddingTop: 80, paddingLeft: 100, paddingRight: 100 }}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Fragment>
    );
  }
}

export default App;
