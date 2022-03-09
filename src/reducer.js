//The initial state for the data layer
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Set initial value of token to null after finishing
  //token:
  //"BQCMPRJtUA3WfPRgt2IBscdwbHgogoZ3-MVcuYpr9fI8Xk_ACYBMjl1NQI5AVTZ96FFhT-CGPk_2_mituN9glh_J3nIpqoTz8EmSYK3RJHh1o8_EzJ5pgzurv779F5eNoVNyX_gNgs5JHDmtcFUgQu2Cq52wUW_wlVlqFtxg39Krnsih",
};

const reducer = (state, action) => {
  console.log(action);
  //Action will change the state
  //Action -> type, [payload]  PAYLOAD is dynamic
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
