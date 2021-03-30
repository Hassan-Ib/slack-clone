import React, { createContext, useContext, useReducer } from "react";
import reducer, { intialstate } from "./reducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
  const setUser = function (user) {
    dispatch({ type: "SET_USER", payload: { user } });
  };

  return (
    <StateContext.Provider
      value={{
        ...state,
        name: "hassan",
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => {
  return useContext(StateContext);
};

export default StateProvider;
