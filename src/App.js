import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Home from './containers/Home';
import About from './containers/About';
import Time from './containers/Time';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Menu
          fixed="top"
          style={{
            backgroundColor: '#86c773',
          }}
        >
          <Menu.Item header>CRYPTOCOIN PORTFOLIO</Menu.Item>
          <Menu.Item exact link to="/" as={NavLink}>
            Home
          </Menu.Item>
          <Menu.Item link to="/about" as={NavLink}>
            About
          </Menu.Item>
          <Menu.Item link to="/time" as={NavLink}>
            Time
          </Menu.Item>
        </Menu>

        <div style={{ padding: 100 }}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/time" component={Time} />
        </div>
      </Fragment>
    );
  }
}

export default App;
