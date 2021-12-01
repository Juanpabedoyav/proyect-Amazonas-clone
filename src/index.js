import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './redux/store'
import App from './containers/App';
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

