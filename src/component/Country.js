import React, { useEffect } from "react";
import {
  fetchCountryData,
  fetchCountriesData,
  fetchLast10Days,
  fetchLast30Days,
} from "../actions";
import { connect } from "react-redux";
import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import StatisticsTable from "./StatisticsTable";

const WorldCases = ({
  fetchCountryData,
  fetchLast10Days,
  fetchLast30Days,
  fetchCountriesData,
  CountryData,
  Last10Days,
  Last30Days,
  CountriesData,
  match,
}) => {
  useEffect(() => {
    fetchCountryData(match.params.country);
    fetchLast10Days();
    fetchLast30Days();
    fetchCountriesData();
  }, []);
  if (!Last10Days.cases || !Last30Days.cases || !CountryData.active) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <TotalCases data={CountryData} />
      <div className="row mx-3 mt-2">
        <BarChart data={Last10Days} />
        <DonutChart data={CountryData} />
        <LineChart data={Last30Days} />
      </div>
      <div className="row mx-3 mt-2">
        <StatisticsTable data={CountriesData} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  CountryData,
  Last10Days,
  Last30Days,
  CountriesData,
}) => {
  return {
    CountryData,
    Last10Days,
    Last30Days,
    CountriesData,
  };
};

export default connect(mapStateToProps, {
  fetchCountryData,
  fetchCountriesData,
  fetchLast10Days,
  fetchLast30Days,
})(WorldCases);
