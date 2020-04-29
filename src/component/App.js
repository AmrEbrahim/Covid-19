import React from "react";
import Header from "./Header";
import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

const App = () => {
  return (
    <div className="fluid-container">
      <Header />
      <TotalCases />
      <div className="row mx-3 mt-2">
        <BarChart />
        <DonutChart />
      </div>
    </div>
  );
};

export default App;
