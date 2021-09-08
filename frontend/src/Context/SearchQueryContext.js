/**
 * This context stores insight search string that user enters
 */

import React, { useState, createContext } from "react";

export const SearchQueryContext = createContext();

export const SearchQueryContextProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
      {props.children}
    </SearchQueryContext.Provider>
  );
};
