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
import { Provider } from "react-redux";
import store from "./store";

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

//import react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient( {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: true,
      refetchOnReconnect: true,
      retry: true,
      staleTime: twentyFourHoursInMs,
      cacheTime: 60 * 10000
    },
  },
} );

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
                <Provider store={store}>
                  <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                  </QueryClientProvider>
                </Provider>
              </SetupWizardContextProvider>
            </WriteKeyContextProvider>
          </SearchQueryContextProvider>
        </AccessTokenContextProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </ThemeSwitcherProvider>,
  document.getElementById("root")
);
