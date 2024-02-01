import { createContext, useReducer } from "react";

import { initialState, showsDataReducer } from "../reducers/showsDataReducer";

export const ShowsContext = createContext();
export const ShowsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(showsDataReducer, initialState);
  return (
    <ShowsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShowsContext.Provider>
  );
};
