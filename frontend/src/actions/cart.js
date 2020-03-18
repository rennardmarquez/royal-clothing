import { VIEW_CART, ADD_TO_CART, REMOVE_TO_CART } from "./types";

export const viewCart = () => async dispatch => {
  dispatch({
    type: VIEW_CART
  });
};

export const addToCart = item => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

export const removeToCart = item => async dispatch => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: item
  });
};
