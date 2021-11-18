import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  function SearchValue(value) {
    setLoading(false);
    // aqui faço a pesquisa com axios
    return `aqui o resulado da pesquisa: ${value}  `;
  }

  return (
    <UserContext.Provider value={{ SearchValue, loading }}>
      {children}
    </UserContext.Provider>
  );
};
