import {
  CART_ITEM,
  LOG_IN,
  REMOVE_FROM_CART,
  SEARCH_RESTRA,
  SIGN_UP,
} from "./ActionTypes";
import data from "../Components/data.json";

const initialState = {
  data: data[0],
  searchData: [],
  isLogged: true,
  flag: false,
  home: true,
  cartData: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESTRA:
      return {
        ...state,
        searchData: state.data[action.payload],
      };
    case SIGN_UP:
      return {
        ...state,
        isLogged: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        flag: action.payload,
        home: action.payload,
      };
    case CART_ITEM:
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartData: state.cartData.filter((val) => val.id !== action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
