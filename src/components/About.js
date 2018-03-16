import React from 'react';
import { List } from 'semantic-ui-react';

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <p>
        I built this cryptocurrency portfolio to experiment with using the{' '}
        <a href="https://redux.js.org/">Redux</a> state management library. The
        app uses the{' '}
        <a href="https://github.com/rt2zz/redux-persist">redux-persist</a>{' '}
        library to locally store your portfolio in localstorage in your browser.
      </p>
      <p>
        This app uses the free API from{' '}
        <a href="https://min-api.cryptocompare.com/">CryptoCompare</a> for live
        price data.
      </p>
      <p>
        I can't guarantee the accuracy of all values and calculations in this
        app. If you find any bugs, feel free to contact me at
        joel@joelbentley.com or add an{' '}
        <a href="https://github.com/joel-bentley/cryptocoin-portfolio/issues">
          issue on Github
        </a>.
      </p>
      <p>To maybe add in the future:</p>
      <List bulleted>
        <List.Item>
          Use the <a href="https://github.com/reactjs/reselect">reselect</a>{' '}
          library to memoize redux selectors in order to only have the rows that
          were updated recalculated from state
        </List.Item>
        <List.Item>
          Add charts and visualizations (react-highcharts or similar)
        </List.Item>
        <List.Item>Add ability to sort rows by any columns</List.Item>
        <List.Item>
          Add ability to add orders and display amounts in different currencies
        </List.Item>
      </List>
    </div>
  );
}

export default About;
