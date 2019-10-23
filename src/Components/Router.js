import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Tv from "../Routes/TV";
import Detail from "../Routes/Detail";



export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/Search" component={Search} /> 
            <Route path="/Tv" component={Tv} /> 
            <Route path="/movie/:id" component={Detail} /> 
            <Route path="/show/:id" component={Detail} /> 
            <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};