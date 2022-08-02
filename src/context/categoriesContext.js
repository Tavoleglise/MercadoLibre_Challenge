import React, { useState } from "react";

const Context = React.createContext({});

export function CategoriesContextProvider({ children }) {
  const [searchCategories, setSearchCategories] = useState([]);

  return (
    <Context.Provider value={{ searchCategories, setSearchCategories }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
