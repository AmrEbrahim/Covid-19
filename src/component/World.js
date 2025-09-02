import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWorldData,
  fetchCountriesData,
  fetchLast10Days,
  fetchLast30Days,
  fetchContinents,
} from "../actions";
import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import ColumnChart from "./ColumnChart";
import Map from "./WorldMap";
import StatisticsTable from "./StatisticsTable";

const WorldCases = () => {
  const dispatch = useDispatch();
  const {
    WorldData,
    Last10Days,
    Last30Days,
    Continents,
    CountriesData,
  } = useSelector((state) => ({
    WorldData: state.WorldData,
    Last10Days: state.Last10Days,
    Last30Days: state.Last30Days,
    Continents: state.Continents,
    CountriesData: state.CountriesData,
  }));

  useEffect(() => {
    dispatch(fetchWorldData());
    dispatch(fetchLast10Days());
    dispatch(fetchLast30Days());
    dispatch(fetchContinents());
    dispatch(fetchCountriesData());
  }, [dispatch]);

  if (
    !Last10Days.cases ||
    !Last30Days.cases ||
    !WorldData.active ||
    !CountriesData[0] ||
    !Continents[0]
  ) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};

export default WorldCases;
