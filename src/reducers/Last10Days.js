export default (state = {}, action) => {
  switch (action.type) {
    case "LAST10DAYS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
