import { createContext, useContext, useReducer } from "react"
import { reducer } from "./reducer"
import { cartItems } from "./data"
import {
  CLEAR_CUT,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEM,
} from "./action"

//? here every action varible come from action.js
//? reducer function come from reducer.js

//@ first we create a context :
const AppContext = createContext()

//* initialState object for object.js
const initialState = {
  loading: false,
  //@ in Map method basically we pass 2d array ==> array inside array
  cart: new Map(cartItems.map((item) => [item.id, item])),
  // cart: new Map([[1, { name: "Yusuf" }]]),
  //@ here item === object
  // cart: new Map([
  //   ["abc", "yusuf"],
  //   ["def", "shahin"],
  //   ["ijk", "farhan"],
  // ]),
  //@ here abc === key && "yusuf" === value .
}

//@ create a component which provide a value .
//@ after creating export it .
export const AppContainer = ({ children }) => {
  //! reducer was import from reducer.js
  const [state, dispatch] = useReducer(reducer, initialState)

  //* clear cart function :
  const clearCart = () => {
    dispatch({ type: CLEAR_CUT })
  }

  return (
    <AppContext.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext.Provider>
  )
}

//@ create a glovalContext to pass the value of "AppContext"

export const glovalContext = () => useContext(AppContext)
