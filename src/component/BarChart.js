import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data }) => {
  const series = [
    {
      name: "Deaths",
      data: Object.values(data.deaths),
    },
    {
      name: "Recovered",
      data: Object.values(data.recovered),
    },
  ];
  const options = {
    chart: {
      foreColor: "#FFF",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: Object.keys(data.cases),
    },
    colors: ["rgb(226, 160, 63)", "#25d5e4"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: `0`,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100, 90],
      },
    },
  };
  return (
    <div className="col-12 col-sm-12 col-lg-8 firstColor px-4 pt-4">
      <div className="app">
        <div className="mb-2" style={{ borderBottom: "1px dashed #3b3f5c" }}>
          <p className="h6 text-white">Deaths vs. Recovered (10 Days)</p>
        </div>
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" height="300" />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
