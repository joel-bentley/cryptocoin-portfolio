import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-css/components/button.css'
// import 'semantic-ui-css/components/card.css'
// import 'semantic-ui-css/components/container.css'
// import 'semantic-ui-css/components/dimmer.css'
// import 'semantic-ui-css/components/divider.css'
// import 'semantic-ui-css/components/grid.css'
// import 'semantic-ui-css/components/header.css'
// import 'semantic-ui-css/components/form.css'
// import 'semantic-ui-css/components/icon.css'
// import 'semantic-ui-css/components/image.css'
// import 'semantic-ui-css/components/input.css'
// import 'semantic-ui-css/components/menu.css'
// import 'semantic-ui-css/components/label.css'
// import 'semantic-ui-css/components/list.css'
// import 'semantic-ui-css/components/loader.css'
// import 'semantic-ui-css/components/reset.css'
// import 'semantic-ui-css/components/sidebar.css'
// import 'semantic-ui-css/components/site.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
