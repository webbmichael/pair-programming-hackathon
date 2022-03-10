import React from "react";

import Header from "./componenets/Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";


import Swipe from "./componenets/Swipe/Swipe";

function App() {
  return (
    <>
      
      <Header    />
      <Route 
          path={`/`}
          exact
          render ={(routerProps)=>{
            return <Login  {...routerProps}/>
          }} />
          <Route 
          path={`/swipe`}
          render ={(routerProps)=>{
            return <Swipe    {...routerProps}/>
       }}/>
        
      


    </>
    
  );
}

export default App;
