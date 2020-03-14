import { VIEW_CART } from "./types";

export const viewCart = () => async dispatch => {
  dispatch({
    type: VIEW_CART
  });
};
