import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ Last30Days }) => {
  const series = [
    {
      name: "Cases",
      data: Object.values(Last30Days.cases),
    },
    {
      name: "Deaths",
      data: Object.values(Last30Days.deaths),
    },
    {
      name: "Recovered",
      data: Object.values(Last30Days.recovered),
    },
  ];
  const options = {
    xaxis: {
      categories: Object.keys(Last30Days.cases),
    },
    stroke: {
      width: 3,
    },
    colors: ["rgb(27, 85, 226)", "rgb(231, 81, 90)", "rgb(0, 227, 150)"],
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "white",
        shadeIntensity: `0`,
        opacityFrom: 0.2,
        opacityTo: 0.3,
        stops: [0, 100, 90],
      },
    },
  };
  return (
    <div className="col-12 firstColor mt-3 px-4 pt-4">
      <div className="app">
        <div className="mb-2" style={{ borderBottom: "1px dashed #3b3f5c" }}>
          <p className="h6 text-muted">Impact over time (30 Days)</p>
        </div>
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" height="300" />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
