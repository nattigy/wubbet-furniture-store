import React, {Fragment} from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Switch} from "react-router";
import Home from "./componenets/home/home";

const App = () => {
  return (
      <Fragment>
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}/>
              </Switch>
          </Router>
      </Fragment>
  );
};

export default App;