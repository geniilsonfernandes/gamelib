import React, { createContext } from "react";
export const UserContext = createContext();
const key = "65fbd76f50e342e8bd866b7e28d30e75";

export const SearchProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
