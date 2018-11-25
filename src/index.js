import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Routes />, document.getElementById('app'),
);
