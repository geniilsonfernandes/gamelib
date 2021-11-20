import React, { createContext } from "react";
export const UserContext = createContext();


export const SearchProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
