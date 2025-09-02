const ContinentsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CONTINENTS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ContinentsReducer;
