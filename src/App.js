import React from "react";
import Header from "./componenets/Header/Header";
import { Route, Switch, Link } from "react-router-dom";
import Swipe from "./componenets/TinderCards/Swipe";
import DinderCard from "./componenets/TinderCards/DinderCard";
import Details from "./componenets/Details/Details";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/chat">
          <h1>Chat Page</h1>
        </Route>
        <Route path="/">
          <DinderCard />
        </Route>
        <Route path="/messeage"></Route>
      </Switch>

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
