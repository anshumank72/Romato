import {
  LOG_IN,
  CART_ITEM,
  SEARCH_RESTRA,
  SIGN_UP,
  REMOVE_FROM_CART,
} from "./ActionTypes";

export const searchRestra = (payload) => ({
  type: SEARCH_RESTRA,
  payload,
});
export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});
export const logIn = (payload) => ({
  type: LOG_IN,
  payload,
});
export const cartItem = (payload) => ({
  type: CART_ITEM,
  payload,
});
export const removeCartItem = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
