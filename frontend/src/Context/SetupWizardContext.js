/**
 * This context loads and stores access token from
 * auth0
 */

import React, { useState, createContext } from "react";

export const SetupWizardContext = createContext();

export const SetupWizardContextProvider = (props) => {
  const [setupWizardVisible, setSetupWizardVisible] = useState(false);

  return (
    <SetupWizardContext.Provider
      value={[setupWizardVisible, setSetupWizardVisible]}
    >
      {props.children}
    </SetupWizardContext.Provider>
  );
};
