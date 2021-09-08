// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { AccessTokenContextProvider } from "./Context/AccessTokenContext";
import { WriteKeyContextProvider } from "./Context/WriteKeyContext";
import { SetupWizardContextProvider } from "./Context/SetupWizardContext";
import { SearchQueryContextProvider } from "./Context/SearchQueryContext";

import "./index.css";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import themes from "./themes";
import "./Asset/font/TrelloFonts/Charlie_Text-Thin.woff";
import "./Asset/font/TrelloFonts/Charlie_Text-Light.woff";
import "./Asset/font/TrelloFonts/Charlie_Text-Regular.woff";
import "./Asset/font/TrelloFonts/Charlie_Text-Semibold.woff";
import "./Asset/font/TrelloFonts/Charlie_Text-Bold.woff";
import "./Asset/font/TrelloFonts/Charlie_Text-Black.woff";
import "./Asset/font/TrelloFonts/Charlie_Display-Semibold.woff";
import "./Asset/font/TrelloFonts/Charlie_Display-Black.woff";

ReactDOM.render(
  <ThemeSwitcherProvider
    defaultTheme="dark"
    themeMap={themes}
    insertionPoint="inject-styles-here"
  >
    <Router>
      <Auth0ProviderWithHistory>
        <AccessTokenContextProvider>
          <SearchQueryContextProvider>
            <WriteKeyContextProvider>
              <SetupWizardContextProvider>
                <App />
              </SetupWizardContextProvider>
            </WriteKeyContextProvider>
          </SearchQueryContextProvider>
        </AccessTokenContextProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </ThemeSwitcherProvider>,
  document.getElementById("root")
);
