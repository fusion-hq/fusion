// src/app.js

import React, { useState, useEffect } from "react";
import { Redirect, Switch } from "react-router-dom";
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
import Cohort from "./Pages/Cohort/Cohort";
import { connect } from "react-redux";
import store from "./store";

const App = (props) => {
  const [token, setToken] = useState();
  const {dispatch} = store;

  const { status } = useThemeSwitcher();
  const { getAccessTokenSilently, isLoading, user, isAuthenticated } = useAuth0();

  const getAccessToken = async () => {
    try {
      let accessToken = await getAccessTokenSilently();
      setToken(accessToken)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccessToken();
    dispatch({type: "writeKeyModel/setWriteKey", payload: {
      token: token,
      isLoading: isLoading,
      user: user?.sub.substr(6),
      isAuthenticated: isAuthenticated
    }});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user, isAuthenticated, isLoading]);

  //check if auth done else show loader
  if (props?.writeKeyModel?.isLoading) {
    return <Loading />;
  }

  //check if css applies by theme-switcher else show loader
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div div className="App">
      <Switch>
        <Redirect exact from="/" to="/settings"></Redirect>
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

const mapState = (state) => ({
  writeKeyModel: state.writeKeyModel,
});

const mapDispatch = (dispatch) => ({
  setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});

export default connect(mapState, mapDispatch)(App);
