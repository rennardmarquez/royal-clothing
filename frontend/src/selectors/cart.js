import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((total, cartItem) => total + cartItem.qty, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.qty * cartItem.price,
    0
  )
);

export const selectIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);
