/**
 * This context loads and stores access token from
 * auth0
 */

import React, { useState, createContext } from "react";

export const WriteKeyContext = createContext();

export const WriteKeyContextProvider = (props) => {
  const [writeKey, setWriteKey] = useState("");

  return (
    <WriteKeyContext.Provider value={[writeKey, setWriteKey]}>
      {props.children}
    </WriteKeyContext.Provider>
  );
};
