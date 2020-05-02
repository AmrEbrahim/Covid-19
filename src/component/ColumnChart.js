import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = ({ continents }) => {
  const series = [
    {
      name: "Cases",
      data: [
        continents[0].active,
        continents[1].active,
        continents[2].active,
        continents[3].active,
        continents[4].active,
        continents[5].active,
      ],
    },
    {
      name: "Recovered",
      data: [
        continents[0].recovered,
        continents[1].recovered,
        continents[2].recovered,
        continents[3].recovered,
        continents[4].recovered,
        continents[5].recovered,
      ],
    },
    {
      name: "Deaths",
      data: [
        continents[0].deaths,
        continents[1].deaths,
        continents[2].deaths,
        continents[3].deaths,
        continents[4].deaths,
        continents[5].deaths,
      ],
    },
  ];
  const options = {
    colors: ["rgb(0, 143, 251)", "rgb(0, 227, 150)", "rgb(231, 81, 90)"],
    chart: {
      type: "bar",
      //   height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
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

    xaxis: {
      categories: [
        continents[0].continent,
        continents[1].continent,
        continents[2].continent,
        continents[3].continent,
        continents[4].continent,
        continents[5].continent,
      ],
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
          <p className="h6 text-muted">Impact over Continents</p>
        </div>
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" height="300" />
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
