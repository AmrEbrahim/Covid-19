export default (state = {}, action) => {
  switch (action.type) {
    case "HISTORY_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
