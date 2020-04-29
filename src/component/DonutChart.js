import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchWorldData } from "../actions";

const Donut = ({ fetchWorldData, WorldData }) => {
  useEffect(() => {
    fetchWorldData();
  }, []);
  if (!WorldData.active) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }
  const options = {
    labels: ["Active", "Recovered", "Deaths"],
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
        <div className="donut d-flex justify-content-center align-items-center">
          <Chart options={options} series={series} type="donut" width="400" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ WorldData }) => {
  return {
    WorldData,
  };
};

export default connect(mapStateToProps, { fetchWorldData })(Donut);
