import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Routes from './routes';
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('app'),
);
