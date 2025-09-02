const WorldDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "WORLD_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default WorldDataReducer;
