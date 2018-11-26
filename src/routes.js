import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route exact path="/course/:id" component={ManageCoursePage} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
