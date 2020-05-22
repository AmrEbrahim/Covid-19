export default (state = {}, action) => {
  switch (action.type) {
    case "COUNTRY_DATA":
      return { ...state, ...action.payload };
    case "CLEAR_MOVIES":
      return [...action.payload];
    default:
      return state;
  }
};
