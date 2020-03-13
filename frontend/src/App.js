import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Homepage from "./pages/homepage/homepage";
import LoginRegister from "./pages/login-register/login-register";
import Dashboard from "./pages/dashboard/dashboard";

//Components
import Announcement from "./components/announcement/announcement";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

//Redux
import { connect } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

const App = ({ isAuthenticated }) => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Fragment>
      <Announcement />
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/login"
          render={() =>
            isAuthenticated ? <Redirect to="/dashboard" /> : <LoginRegister />
          }
        />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
