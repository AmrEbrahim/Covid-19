import CovidData from "../api/covid19";

export const fetchWorldData = () => async (dispatch) => {
  const response = await CovidData.get("/all");
  console.log(response.data);
  dispatch({ type: "WORLD_DATA", payload: response.data });
};
export const fetchCountryData = () => async (dispatch) => {
  const response = await CovidData.get("/countries/egypt");
  console.log(response.data);
  dispatch({ type: "COUNTRY_DATA", payload: response.data });
};

export const fetchHistoryData = () => async (dispatch) => {
  const response = await CovidData.get("/historical/all?lastdays=10");
  console.log(response.data);
  dispatch({ type: "HISTORY_DATA", payload: response.data });
};
