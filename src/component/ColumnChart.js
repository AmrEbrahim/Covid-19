import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = ({ data }) => {
  const series = [
    {
      name: "Cases",
      data: [
        data[0].active,
        data[1].active,
        data[2].active,
        data[3].active,
        data[4].active,
        data[5].active,
      ],
    },
    {
      name: "Recovered",
      data: [
        data[0].recovered,
        data[1].recovered,
        data[2].recovered,
        data[3].recovered,
        data[4].recovered,
        data[5].recovered,
      ],
    },
    {
      name: "Deaths",
      data: [
        data[0].deaths,
        data[1].deaths,
        data[2].deaths,
        data[3].deaths,
        data[4].deaths,
        data[5].deaths,
      ],
    },
  ];
  const options = {
    xaxis: {
      categories: [
        data[0].continent,
        data[1].continent,
        data[2].continent,
        data[3].continent,
        data[4].continent,
        data[5].continent,
      ],
    },
    colors: ["rgb(0, 143, 251)", "rgb(0, 227, 150)", "rgb(231, 81, 90)"],
    chart: {
      type: "bar",
      foreColor: "#FFF",
      //   height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    legend: {
      position: "right",
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <div className="col-12 col-sm-12 col-lg-12 firstColor px-4 pt-4 mt-3">
      <div className="app">
        <div className="mb-2" style={{ borderBottom: "1px dashed #3b3f5c" }}>
          <p className="h6 text-muted">Impact over data</p>
        </div>
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" height="300" />
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
