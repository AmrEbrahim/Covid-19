import { combineReducers } from "redux";
import WorldData from "./worldData";
import Last10Days from "./Last10Days";
import Last30Days from "./Last30Days";
import Continents from "./continents";

export default combineReducers({
  WorldData,
  Last10Days,
  Last30Days,
  Continents,
});
