/**
 * This context loads and stores access token from
 * auth0
 */

import React, { useState, createContext } from "react";

export const AccessTokenContext = createContext();

export const AccessTokenContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <AccessTokenContext.Provider value={[accessToken, setAccessToken]}>
      {props.children}
    </AccessTokenContext.Provider>
  );
};
