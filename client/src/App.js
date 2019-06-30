//fragment and useEffect hook (replaces lifecycle method componentDidMount)
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Addicecream from "./components/pages/Addicecream";
import Buyicecream from "./components/pages/Buyicecream";
import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadIcecreamItems } from "./actions/icecream_actions";

import "./App.css";

const App = () => {
  // useEffect(() => {
  //   //dispatch loadIcecreamItems (the [] make sure the useEffect hook runs only once instead of continuous loop)
  //   store.dispatch(loadIcecreamItems);
  // }, []);
  //console.log("test");
  store.dispatch(loadIcecreamItems);

  return (
    // pass in store to the provider
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/addicecream" component={Addicecream} />
            <Route exact path="/buyicecream" component={Buyicecream} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
