import React from "react";

import Header from "./componenets/Header/Header";
import Messages from "./componenets/messages/Messages";
// import {Link,  Redirect, Route, Switch } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";



import Swipe from "./componenets/Swipe/Swipe";
import Details from "./componenets/Details/Details";



function App() {
  return (
  
    <>
      
      <Header/>

      <Route 
          path={"/"}
          exact
          render ={(routerProps)=>{
            return <Details    {...routerProps}/>
       }}/>
          <Route 
          path={"/swipe"}
          render ={(routerProps)=>{
            return <Swipe    {...routerProps}/>
       }}/>
       <Route 
          path={"/messages"}
          render ={(routerProps)=>{
            return <Messages    {...routerProps}/>
       }}/>
    
    </>
    
  );
}

export default App;
