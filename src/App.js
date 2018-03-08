import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu, Header, Divider } from 'semantic-ui-react';

import Home from './containers/Home';
import About from './containers/About';
import Time from './containers/Time';

const sidebarWidth = 140;

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu
          vertical
          fixed="left"
          style={{
            width: sidebarWidth,
            paddingTop: 40,
            backgroundColor: '#86c773',
          }}
        >
          <Divider fitted />
          <Header textAlign="center">Cryptocoin Portfolio</Header>

          <Divider />
          <Menu.Item exact link to="/" as={NavLink}>
            Home
          </Menu.Item>
          <Menu.Item link to="/about" as={NavLink}>
            About
          </Menu.Item>
          <Menu.Item link to="/time" as={NavLink}>
            Time
          </Menu.Item>
          <Divider fitted />
          <Divider />
        </Menu>

        <div
          style={{
            marginLeft: sidebarWidth,
          }}
        >
          <div style={{ padding: 80 }}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/time" component={Time} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
