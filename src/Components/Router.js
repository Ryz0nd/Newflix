import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Movie from "../Routes/Movie";



export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/Search" component={Search} /> 
            <Route path="/TV" component={TV} /> 
            <Route path="/Movie/" component={Movie} /> 
            <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};