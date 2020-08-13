import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoronaVirus from "./Pages/CoronaVirus";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Industries from "./Pages/Industries";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={CoronaVirus} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Industries" component={Industries} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
