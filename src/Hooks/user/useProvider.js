import React, { createContext } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ login: false }}>
      {children}
    </UserContext.Provider>
  );
};
