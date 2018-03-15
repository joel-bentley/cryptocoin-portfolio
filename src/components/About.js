import React from 'react';

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
        I can't guarantee the accuracy of all values and calculations in this
        app. If you find any bugs, feel free to contact me at
        joel@joelbentley.com or add an{' '}
        <a href="https://github.com/joel-bentley/cryptocoin-portfolio/issues">
          issue on Github
        </a>.
      </p>
    </div>
  );
}

export default About;
