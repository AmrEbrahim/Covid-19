import CovidData from "../api/covid19";

export const fetchWorldData = () => async (dispatch) => {
  const response = await CovidData.get("/all");
  console.log(response.data);
  dispatch({ type: "WORLD_DATA", payload: response.data });
};

export const fetchCountryData = (country) => async (dispatch) => {
  // const response = await CovidData.get(`/countries/${country}`);
  const response = await CovidData.get(`/countries`);
  console.log(response.data);
  dispatch({ type: "COUNTRY_DATA", payload: response.data });
};

export const fetchLast10Days = () => async (dispatch) => {
  const response = await CovidData.get("/historical/all?lastdays=10");
  console.log(response.data);
  dispatch({ type: "LAST10DAYS", payload: response.data });
};

export const fetchLast30Days = () => async (dispatch) => {
  const response = await CovidData.get("/historical/all");
  console.log(response.data);
  dispatch({ type: "LAST30DAYS", payload: response.data });
};

export const fetchContinents = () => async (dispatch) => {
  const response = await CovidData.get("/continents");
  console.log(response.data);
  dispatch({ type: "CONTINENTS", payload: response.data });
};
