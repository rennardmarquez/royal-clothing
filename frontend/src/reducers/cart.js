import { VIEW_CART, ADD_TO_CART, REMOVE_TO_CART } from "../actions/types";

import addItemsToCart from "../utils/addItemsToCart";
import removeItemsToCart from "../utils/removeItemsToCart";

const initialState = {
  isHidden: true,
  cartItems: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_CART:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case ADD_TO_CART:
      return {
        ...state,
        isHidden: false,
        cartItems: addItemsToCart(state.cartItems, payload)
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, payload)
      };
    default:
      return state;
  }
}
