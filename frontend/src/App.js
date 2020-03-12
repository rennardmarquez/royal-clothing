import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import LoginRegister from "./pages/login-register/login-register";

import Announcement from "./components/announcement/announcement";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Announcement />
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginRegister} />
        </Switch>
        <Footer />
      </Fragment>
    </Provider>
  );
};

export default App;
