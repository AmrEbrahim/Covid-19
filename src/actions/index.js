import CovidData from "../api/covid19";

export const fetchWorldData = () => async (dispatch) => {
  const response = await CovidData.get("/all");
  dispatch({ type: "WORLD_DATA", payload: response.data });
};

export const fetchCountriesData = () => async (dispatch) => {
  const response = await CovidData.get(`/countries`);
  dispatch({ type: "COUNTRIES_DATA", payload: response.data });
};

export const fetchCountryData = (country) => async (dispatch) => {
  const response = await CovidData.get(`/countries/${country}`);
  dispatch({ type: "COUNTRY_DATA", payload: response.data });
};

export const fetchLast10Days = () => async (dispatch) => {
  const response = await CovidData.get("/historical/all?lastdays=10");
  dispatch({ type: "LAST10DAYS", payload: response.data });
};

export const fetchCountry10Days = (country) => async (dispatch) => {
  const response = await CovidData.get(`/historical/${country}?lastdays=10`);
  dispatch({ type: "COUNTRY10DAYS", payload: response.data.timeline });
};

export const fetchLast30Days = () => async (dispatch) => {
  const response = await CovidData.get("/historical/all");
  dispatch({ type: "LAST30DAYS", payload: response.data });
};

export const fetchCountry30Days = (country) => async (dispatch) => {
  const response = await CovidData.get(`/historical/${country}`);
  dispatch({ type: "COUNTRY30DAYS", payload: response.data.timeline });
};

export const fetchContinents = () => async (dispatch) => {
  const response = await CovidData.get("/continents");
  dispatch({ type: "CONTINENTS", payload: response.data });
};
