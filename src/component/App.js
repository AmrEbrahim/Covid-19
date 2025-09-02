import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<World />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/:id" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
