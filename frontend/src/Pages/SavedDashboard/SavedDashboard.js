/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect, useContext } from "react";
import "./SavedDashboard.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Button, notification } from "antd";
import {
  ReloadOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import { WriteKeyContext } from "../../Context/WriteKeyContext";
import { Link, useParams } from "react-router-dom";
import { Trash, Trash2 } from "react-feather";
import { useAuth0 } from "@auth0/auth0-react";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";

function SavedDashboard() {
  const { dashboardTitle } = useParams();

  const [accessToken, setAccessToken] = useContext(AccessTokenContext);
  const [writeKey, setWriteKey] = useContext(WriteKeyContext);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const token = accessToken;
  const [metrics, setMetrics] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [sidenavVisible, setSidenavVisible] = useState("flex");

  const { user } = useAuth0();
  const { email } = user;

  // Fetch saved metrics for current dashboard
  const fetchSavedMetrics = async (dashboardTitle, writeKey) => {
    try {
      const response = await fetch(
        `${serverUrl}/metrics?dashboard=${dashboardTitle}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const savedMetrics = await response.json();
      setMetrics(savedMetrics);
    } catch (error) {
      console.log(error.message);
    }
  };

  var elem = document.getElementById("SavedDashboard");

  function toggleFullScreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  useEffect(() => {
    fetchSavedMetrics(dashboardTitle, writeKey);
  }, []);

  return (
    <div className="SavedDashboard" id="SavedDashboard">
      <div className="main-container">
        <Sidenav subPath={dashboardTitle} visible={sidenavVisible} />
        <div className="content-container">
          <div className="content">
            <div className="header">
              <span
                className="header-text"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h1>{dashboardTitle}</h1>
                <p></p>
              </span>
              <Button
                style={{
                  marginLeft: "auto",
                  marginBottom: "0px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  if (sidenavVisible === "flex") {
                    setSidenavVisible("none");
                    toggleFullScreen();
                  } else {
                    setSidenavVisible("flex");
                    toggleFullScreen();
                  }
                }}
              >
                <FundProjectionScreenOutlined />
                Full Screen
              </Button>
              <Button
                type="primary"
                icon={<ReloadOutlined />}
                style={{}}
                onClick={() => {
                  fetchSavedMetrics(dashboardTitle, writeKey);
                }}
              >
                Refresh
              </Button>
            </div>

            <div className="dashboard-card-container-grid">
              {metrics
                ? metrics.map((metrics, index) => (
                    <DashboardCard data={metrics} key={index} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SavedDashboard;
