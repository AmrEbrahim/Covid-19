import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";

import World from "./World";
import Country from "./Country";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import "jvectormap-next/jquery-jvectormap.css";

const App = () => {
  return (
    <div className="fluid-container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={World}></Route>
        <Route path="/:country" exact component={Country}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
