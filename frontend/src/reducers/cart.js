import { VIEW_CART } from "../actions/types";

const initialState = {
  isHidden: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_CART:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    default:
      return state;
  }
}
