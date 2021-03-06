import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import World from "./World";
import Country from "./Country";
import NotFound from "./NotFound";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import "jvectormap-next/jquery-jvectormap.css";

const App = () => {
  return (
    <div className="fluid-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={World}></Route>
          <Route path="/NotFound" exact component={NotFound}></Route>
          <Route path="/:id" component={Country}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
