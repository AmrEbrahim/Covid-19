import React, { useEffect } from "react";
import {
  fetchWorldData,
  fetchCountriesData,
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
  fetchCountriesData,
  WorldData,
  Last10Days,
  Last30Days,
  Continents,
  CountriesData,
}) => {
  useEffect(() => {
    fetchWorldData();
    fetchLast10Days();
    fetchLast30Days();
    fetchContinents();
    fetchCountriesData();
  }, [
    fetchWorldData,
    fetchLast10Days,
    fetchLast30Days,
    fetchContinents,
    fetchCountriesData,
  ]);
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
      <TotalCases data={WorldData} />
      <div className="row mx-3 mt-2">
        <BarChart data={Last10Days} />
        <DonutChart data={WorldData} />
        <LineChart data={Last30Days} />
        <ColumnChart data={Continents} />
      </div>
      <Map data={CountriesData} />
      <div className="row mx-3 mt-2">
        <StatisticsTable data={CountriesData} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  WorldData,
  Last10Days,
  Last30Days,
  Continents,
  CountriesData,
}) => {
  return {
    WorldData,
    Last10Days,
    Last30Days,
    Continents,
    CountriesData,
  };
};

export default connect(mapStateToProps, {
  fetchWorldData,
  fetchCountriesData,
  fetchLast10Days,
  fetchLast30Days,
  fetchContinents,
})(WorldCases);
