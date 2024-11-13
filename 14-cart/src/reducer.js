import {
  CLEAR_CUT,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEM,
} from "./action"

export const reducer = (state, action) => {
  if (action.type === CLEAR_CUT) {
    return { ...state, cart: new Map() }
  }
  return state
}
