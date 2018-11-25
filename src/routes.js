import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
