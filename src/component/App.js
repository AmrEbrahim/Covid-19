import React from "react";
import Header from "./Header";
import { Router, Switch, Route } from "react-router-dom";
import history from "../history";

import World from "./World";
import Country from "./Country";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import "jvectormap-next/jquery-jvectormap.css";

const App = () => {
  return (
    <div className="fluid-container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={World}></Route>
        <Route path="/:id" exact component={Country}></Route>
      </Router>
    </div>
  );
};

export default App;
