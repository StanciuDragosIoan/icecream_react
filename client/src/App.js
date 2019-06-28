import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Addicecream from "./components/pages/Addicecream";
import Buyicecream from "./components/pages/Buyicecream";

import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/addicecream" component={Addicecream} />
        <Route exact path="/buyicecream" component={Buyicecream} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
