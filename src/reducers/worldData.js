export default (state = {}, action) => {
  switch (action.type) {
    case "WORLD_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
