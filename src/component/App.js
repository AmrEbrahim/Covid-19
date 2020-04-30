import React from "react";
import Header from "./Header";
import WorldCases from "./WorldCases";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

const App = () => {
  return (
    <div className="fluid-container">
      <Header />
      <WorldCases />
    </div>
  );
};

export default App;
