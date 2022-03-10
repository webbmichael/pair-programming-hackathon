import React from "react";

import Header from "./componenets/Header/Header";
import Messages from "./componenets/messages/Messages";
// import {Link,  Redirect, Route, Switch } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import Swipe from "./componenets/Swipe/Swipe";
import Details from "./componenets/Details/Details";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat"> Chat Page</Route>
          <Route path="/"> Home Page</Route>
          <Route path="/messeage"> Individual Chat Screen</Route>
        </Switch>
      </Router>

      {/* Tinder Cards */}
      {/* Buttons below Card */}

      {/* Chat Screen */}

      {/* Individual Chat Screen */}

      {/* <Route
        path={"/"}
        exact
        render={(routerProps) => {
          return <Details {...routerProps} />;
        }}
      />
      <Route
        path={"/swipe"}
        render={(routerProps) => {
          return <Swipe {...routerProps} />;
        }}
      /> */}
    </div>
  );
}

export default App;
