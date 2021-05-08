import { SEARCH_RESTRA } from "./ActionTypes";
import data from "../Components/data.json";

const initialState = {
  data: data[0],
  searchData: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESTRA:
      return {
        ...state,
        searchData: state.data[action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
