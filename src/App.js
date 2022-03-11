import React from "react";
import Header from "./componenets/Header/Header";
import { Route, Switch, Link, Router } from "react-router-dom";
import TinderCard from "react-tinder-card";
import SwipeButtons from "./componenets/swipeButtons/SwipeButtons";
import ChatScreen from "./componenets/ChatScreen/ChatScreen";
import Chat from "./componenets/Chat.js/Chat";
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
