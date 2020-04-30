import React, { useEffect } from "react";
import {
  fetchWorldData,
  fetchCountryData,
  fetchLast10Days,
  fetchLast30Days,
} from "../actions";
import { connect } from "react-redux";
import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";

const WorldCases = ({
  fetchWorldData,
  fetchLast10Days,
  fetchLast30Days,
  fetchCountryData,
  WorldData,
  Last10Days,
  Last30Days,
}) => {
  useEffect(() => {
    fetchWorldData();
    fetchLast10Days();
    fetchLast30Days();
    // fetchCountryData();
  }, []);
  if (!Last10Days.cases || !WorldData.active) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <TotalCases WorldData={WorldData} />
      <div className="row mx-3 mt-2">
        <BarChart Last10Days={Last10Days} />
        <DonutChart WorldData={WorldData} />
        <LineChart Last30Days={Last30Days} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ WorldData, Last10Days, Last30Days }) => {
  return {
    WorldData,
    Last10Days,
    Last30Days,
  };
};

export default connect(mapStateToProps, {
  fetchWorldData,
  fetchCountryData,
  fetchLast10Days,
  fetchLast30Days,
})(WorldCases);
