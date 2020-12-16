import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Todo from "../modules/todo/Todo";
import About from "../modules/about/About";

export default props => (
  <Router history={hashHistory}>
    <Route path="/todo-list" component={Todo} />
    <Route path="/about" component={About} />
    <Route from="*" to="/todo-list" />
  </Router>
);
