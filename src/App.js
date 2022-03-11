import React from "react";
import Header from "./componenets/Header/Header";
import { Route, Switch, Link, Router } from "react-router-dom";
<<<<<<< HEAD
import TinderCard from "react-tinder-card";
import SwipeButtons from "./componenets/swipeButtons/SwipeButtons";
import ChatScreen from "./componenets/ChatScreen/ChatScreen";
import Chat from "./componenets/Chat.js/Chat";
=======
import Swipe from "./componenets/TinderCards/Swipe";
import TinderCard from "./componenets/TinderCards/TinderCard";
import SwipeButtons from "./componenets/swipeButtons/SwipeButtons";
import Details from "./componenets/Details/Details";
import { ClassNames } from "@emotion/react";
>>>>>>> 44b46c0d3482a9185c7c525136f563ac022b5474
import Chats from "./componenets/Chats/Chats";
import DinderCard from "./componenets/TinderCards/DinderCard";


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path="/chat">
//             <Header backButton="/" />

//             <h1>Chat Page</h1>
//           </Route>
//           <Route path="/">
//             <Header />
//             <TinderCard />
//             <SwipeButtons />
//           </Route>
//           <Route path="/messeage"></Route>
//         </Switch>
//       </Router>
//       {/* Tinder Cards */}
//       {/* Buttons below Card */}
//       {/* Chat Screen */}
//       {/* Individual Chat Screen */}
//       {/* <Route
//         path={"/"}
//         exact
//         render={(routerProps) => {
//           return <Details {...routerProps} />;
//         }}
//       />
//       <Route
//         path={"/swipe"}
//         render={(routerProps) => {
//           return <Swipe {...routerProps} />;
//         }}
//       /> */}
//     </div>
//   );
// }

// export default App;

function App() {
console.log(window.location.ref)
  return (
    <div className="App">
<<<<<<< HEAD
 
      <Header />

      <Switch>
        <Route path="/chatty">
          <h1>Chat Page</h1>
        </Route>
        <Route path="/" exact>
          <DinderCard />
        </Route>
        <Route path="/c" exact component={Chats}></Route>
        <Route path="/chat" component={ChatScreen}></Route>

      </Switch>

=======
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
>>>>>>> 44b46c0d3482a9185c7c525136f563ac022b5474
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
      */}
    </div>
  );
}

export default App;
