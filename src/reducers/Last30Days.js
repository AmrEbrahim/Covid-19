export default (state = {}, action) => {
  switch (action.type) {
    case "LAST30DAYS":
      return { ...state, ...action.payload };
    case "COUNTRY30DAYS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
