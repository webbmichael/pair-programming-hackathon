import React from "react";
import Header from "./componenets/Header/Header";
import { Route, Switch, Link, Router } from "react-router-dom";
import Swipe from "./componenets/TinderCards/Swipe";
import TinderCard from "./componenets/TinderCards/TinderCard";
import SwipeButtons from "./componenets/swipeButtons/SwipeButtons";
import Details from "./componenets/Details/Details";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />

            <h1>Chat Page</h1>
          </Route>
          <Route path="/">
            <Header />

            <TinderCard />
            <SwipeButtons />
          </Route>
          <Route path="/messeage"></Route>
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
