export default (state = {}, action) => {
  switch (action.type) {
    case "WORLD_DATA":
      return { ...state, ...action.payload };
    case "COUNTRY_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
