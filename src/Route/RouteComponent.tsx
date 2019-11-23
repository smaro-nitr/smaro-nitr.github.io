import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { routes } from './RouteConfig';

export default class RouteComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={() => route.sidebar(route.title)}
            />
          ))}
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={() => <route.main />}
            />
          ))}
        </Switch>
      </Router>
    )
  };
}
