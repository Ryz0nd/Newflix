import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Movie from "../Routes/Movie";
import Content from "../Routes/Content";
import Footer from "../Components/Footer";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/Search" component={Search} /> 
            <Route path="/TV" component={TV} /> 
            <Route path="/Movie" component={Movie} /> 
            <Route path="/NewContent" component={Content} />
            <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};