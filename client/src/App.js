import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";

import Announcement from "./components/announcement/announcement";
import Header from "./components/header/header";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Announcement />
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
