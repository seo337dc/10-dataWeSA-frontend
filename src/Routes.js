import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoronaVirus from "./Pages/CoronaVirus";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CoronaVirus} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;