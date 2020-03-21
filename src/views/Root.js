import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Lipsticks from "./Lipsticks";
import About from "./About";
import { routes } from "../routes";

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.about} component={About} />
        <Route path={routes.lipsticks} component={Lipsticks} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
