export default (state = {}, action) => {
  switch (action.type) {
    case "COUNTRIES_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
