import React from "react";
import Chart from "react-apexcharts";

const Donut = ({ WorldData }) => {
  const options = {
    labels: ["Active", "Recovered", "Deaths"],
    colors: ["rgb(27, 85, 226)", "rgb(0, 227, 150)", "rgb(231, 81, 90)"],
    stroke: {
      show: true,
      colors: ["#0e1726"],
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              offsetY: -1,
              show: true,
            },
            total: {
              show: true,
              color: "#FFF",
            },
          },
          size: "70%",
        },
      },
    },
  };

  const series = [WorldData.active, WorldData.recovered, WorldData.deaths];

  return (
    <div className="col-12 col-sm-12 col-lg-4 pr-0">
      <div className="col-12 col-sm-12 col-xl-12 h-100 firstColor pt-4">
        <div className="mb-2">
          <p className="h6 text-muted">Impact so far</p>
        </div>
        <div className="donut d-flex justify-content-center align-items-center pb-3">
          <Chart options={options} series={series} type="donut" width="400" />
        </div>
      </div>
    </div>
  );
};

export default Donut;
