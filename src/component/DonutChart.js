import React from "react";
import Chart from "react-apexcharts";

const Donut = ({ data }) => {
  const options = {
    chart: {
      type: "bar",
      foreColor: "#FFF",
    },
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
          size: "65%",
        },
      },
    },
  };

  const series = [data.active, data.recovered, data.deaths];

  return (
    <div className="col-12 col-sm-12 col-lg-4 pe-0">
      <div className="col-12 col-sm-12 col-xl-12 h-100 firstColor pt-4">
        <div className="mb-2">
          <p className="h6 text-white">Impact so far</p>
        </div>
        <div className="donut d-flex justify-content-center align-items-center pb-3">
          <Chart options={options} series={series} type="donut" width="350" />
        </div>
      </div>
    </div>
  );
};

export default Donut;
