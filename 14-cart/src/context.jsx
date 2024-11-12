import { createContext, useContext, useReducer } from "react"
import { reducer } from "./reducer"
import {
  CLEAR_CUT,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEM,
} from "./action"

//@ first we create a context :
const AppContext = createContext()

const initialState = {
  loading: false,
  cart: [],
}

//@ create a component which provide a value .
//@ after creating export it .
export const AppContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

//@ create a glovalContext to pass the value of "AppContext"

export const glovalContext = () => useContext(AppContext)
