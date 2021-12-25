// src/app.js

import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Components/Loading/Loading";
import Users from "./Pages/Users/Users.js";
import Events from "./Pages/Events/Events.js";
import Session from "./Pages/Session/Session.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Insights from "./Pages/Insights/Insights.js";
import Action from "./Pages/Action/Action.js";
import Settings from "./Pages/Settings/Settings.js";
import SavedDashboard from "./Pages/SavedDashboard/SavedDashboard.js";
import User from "./Pages/User/User.js";
import Email from "./Pages/Email/Email.js";
import Recording from "./Pages/Recording/Recording.js";

import ProtectedRoute from "./auth/protected-route";
import { AccessTokenContext } from "./Context/AccessTokenContext";
import { WriteKeyContext } from "./Context/WriteKeyContext";
import Cohort from "./Pages/Cohort/Cohort";
import axios from "axios";

const App = () => {
  const [accessToken, setAccessToken] = useContext(AccessTokenContext);
  const [, setWriteKey] = useContext(WriteKeyContext);

  const { status } = useThemeSwitcher();
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently, isLoading, user, isAuthenticated } =
    useAuth0();
  var userId;

  var planUrl = `https://user-plan-service-c1ae03e9e39e760c.onporter.run/plans/`;

  const getAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
      //console.log(accessToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  const saveFusionUserId = async (userId) => {
    const token = accessToken;
    try {
      await fetch(`${serverUrl}/save-userId?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccessToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //check if auth done else show loader
  if (isLoading) {
    return <Loading />;
  }

  // super important otherwise throws error
  if (isAuthenticated) {
    userId = user.sub.substr(6);
    saveFusionUserId(userId);
    setWriteKey(userId);
    axios.post(planUrl + `getAccountAvailability/${userId}/`);
  }

  //check if css applies by theme-switcher else show loader
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/settings"></Redirect>
        </Route>
        <ProtectedRoute exact path="/users" component={Users} />
        <ProtectedRoute exact path="/events" component={Events} />
        <ProtectedRoute exact path="/session" component={Session} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/insights" component={Insights} />
        <ProtectedRoute exact path="/action" component={Action} />
        <ProtectedRoute exact path="/email" component={Email} />
        <ProtectedRoute exact path="/cohort" component={Cohort} />
        <ProtectedRoute
          exact
          path="/action/:userId/:deviceId"
          component={Action}
        />
        <ProtectedRoute exact path="/settings" component={Settings} />
        <ProtectedRoute
          exact
          path="/dashboard/:dashboardTitle"
          component={SavedDashboard}
        />
        <ProtectedRoute
          exact
          path="/user/:uuid/:userId/:deviceId"
          component={User}
        />
        <ProtectedRoute exact path="/recording/:id" component={Recording} />
      </Switch>
    </div>
  );
};

export default App;
