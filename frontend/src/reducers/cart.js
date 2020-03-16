import { VIEW_CART, ADD_TO_CART } from "../actions/types";

import addItemsToCart from "../utils/addItemsToCart";

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
        cartItems: addItemsToCart(state.cartItems, payload)
      };
    default:
      return state;
  }
}
