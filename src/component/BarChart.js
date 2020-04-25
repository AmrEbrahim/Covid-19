import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchHistoryData } from "../actions";

class BarChart extends Component {
  async componentDidMount() {
    await this.props.fetchHistoryData();
  }
  render() {
    if (!this.props.History.cases) {
      console.log("null");
      return null;
    }
    const series = [
      {
        name: "Deaths",
        data: Object.values(this.props.History.deaths),
      },
      {
        name: "Recovered",
        data: Object.values(this.props.History.recovered),
      },
    ];
    const options = {
      xaxis: {
        categories: Object.keys(this.props.History.cases),
      },
      colors: ["#541DAF", "#DCA140"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: `0`,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100, 500],
        },
      },
    };
    return (
      <div className="app">
        <div className="row mx-3">
          <div className="col-12 col-sm-8 firstColor px-4 pt-4">
            <div
              className="mb-2"
              style={{ borderBottom: "1px dashed #3b3f5c" }}
            >
              <p className="h6 text-muted">Deaths vs. Recovered (10 Days)</p>
            </div>
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type="bar"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { History: state.HistoryData };
};
export default connect(mapStateToProps, { fetchHistoryData })(BarChart);
