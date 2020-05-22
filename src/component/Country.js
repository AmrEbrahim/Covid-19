import React, { useEffect } from "react";
import {
  fetchCountryData,
  fetchCountry10Days,
  fetchCountry30Days,
  clearData,
} from "../actions";
import { connect } from "react-redux";
import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import StatisticsTable from "./StatisticsTable";

const Country = ({
  fetchCountryData,
  fetchCountry10Days,
  fetchCountry30Days,
  fetchCountriesData,
  CountryData,
  Last10Days,
  Last30Days,
  match,
}) => {
  useEffect(() => {
    fetchCountryData(match.params.id);
    fetchCountry10Days(match.params.id);
    fetchCountry30Days(match.params.id);
  }, [match.params.id]);
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
        {/* <StatisticsTable data={CountriesData} /> */}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ CountryData, Last10Days, Last30Days }) => {
  return {
    CountryData,
    Last10Days,
    Last30Days,
  };
};

export default connect(mapStateToProps, {
  fetchCountryData,
  fetchCountry10Days,
  fetchCountry30Days,
  clearData,
})(Country);
