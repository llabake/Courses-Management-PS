import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";
import NotFound from "./components/NotFound";
import AuthorsPage from "./components/authors/AuthorsPage";
import ManageAuthorPage from "./components/authors/ManageAuthorPage";

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route exact path="/course/:id" component={ManageCoursePage} />
        <Route exact path="/authors" component={AuthorsPage} />
        <Route exact path="/author" component={ManageAuthorPage} />
        <Route exact path="/author/:id" component={ManageAuthorPage} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
