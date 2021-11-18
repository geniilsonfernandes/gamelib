import React, { createContext } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const login = false;

  return (
    <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
  );
};
