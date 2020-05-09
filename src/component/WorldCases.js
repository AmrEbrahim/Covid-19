import React, { useEffect } from "react";
import {
  fetchWorldData,
  fetchCountryData,
  fetchLast10Days,
  fetchLast30Days,
  fetchContinents,
} from "../actions";
import { connect } from "react-redux";
import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import ColumnChart from "./ColumnChart";
import Map from "./WorldMap";
import StatisticsTable from "./StatisticsTable";

const WorldCases = ({
  fetchWorldData,
  fetchLast10Days,
  fetchLast30Days,
  fetchContinents,
  fetchCountryData,
  WorldData,
  Last10Days,
  Last30Days,
  Continents,
}) => {
  useEffect(() => {
    fetchWorldData();
    fetchLast10Days();
    fetchLast30Days();
    fetchContinents();
    // fetchCountryData();
  }, []);
  if (
    !Last10Days.cases ||
    !Last30Days.cases ||
    !WorldData.active ||
    !Continents[0]
  ) {
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
        <ColumnChart continents={Continents} />
      </div>
      <Map />
      <div className="row mx-3 mt-2">
        <StatisticsTable />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ WorldData, Last10Days, Last30Days, Continents }) => {
  return {
    WorldData,
    Last10Days,
    Last30Days,
    Continents,
  };
};

export default connect(mapStateToProps, {
  fetchWorldData,
  fetchCountryData,
  fetchLast10Days,
  fetchLast30Days,
  fetchContinents,
})(WorldCases);
