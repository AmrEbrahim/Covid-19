import React, { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountryData,
  fetchCountry10Days,
  fetchCountry30Days,
} from "../actions";

import TotalCases from "./TotalCases";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
// import CountryTable from "./CountryTable";

const Country = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { CountryData, Last10Days, Last30Days } = useSelector((state) => ({
    CountryData: state.CountryData,
    Last10Days: state.Last10Days,
    Last30Days: state.Last30Days,
  }));

  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetchCountryData(id));
        await dispatch(fetchCountry10Days(id));
        await dispatch(fetchCountry30Days(id));
      } catch (e) {
        navigate('/NotFound');
      }
    })();
  }, [id, dispatch, navigate]);

  if (!Last10Days.cases || !Last30Days.cases || !CountryData.active) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <TotalCases data={CountryData} />
      <div className="row mx-3 mt-2">
        <BarChart data={Last10Days} />
        <DonutChart data={CountryData} />
        <LineChart data={Last30Days} />
      </div>
      {/* <div className="row mx-3 mt-2">
        <CountryTable data={Last30Days} />
      </div> */}
    </>
  );
};

export default Country;
