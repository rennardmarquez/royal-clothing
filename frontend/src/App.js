import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Homepage from "./pages/homepage/homepage";
import LoginRegister from "./pages/login-register/login-register";
import Shop from "./pages/shop/shop";

//Components
import Announcement from "./components/announcement/announcement";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

//Redux
import { connect } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Checkout from "./pages/checkout/checkout";

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
            isAuthenticated ? <Redirect to="/shop" /> : <LoginRegister />
          }
        />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/checkout"
          render={() => (isAuthenticated ? <Checkout /> : <LoginRegister />)}
        />
      </Switch>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
