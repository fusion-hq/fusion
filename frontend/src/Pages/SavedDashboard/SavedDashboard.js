/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect } from "react";
import "./SavedDashboard.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Button, Spin } from "antd";
import {
  ReloadOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import { connect } from "react-redux";

function SavedDashboard(props) {
  const { dashboardTitle } = useParams();

  //authtoken and writekey
  const [token, ] = useState(props?.writeKeyModel?.token);
  const [writeKey, ] = useState(props?.writeKeyModel?.user);

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [metrics, setMetrics] = useState([]);
  const [sidenavVisible, setSidenavVisible] = useState("flex");
  const [loading, setLoading] = useState(false);

  // Fetch saved metrics for current dashboard
  const fetchSavedMetrics = async (dashboardTitle, writeKey) => {
    setLoading(true);
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
      setLoading(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {loading ? (
                <Spin size="large" style={{ margin: "25vh 0 0 40vw" }} />
              ) : metrics ? (
                metrics.map((metrics, index) => (
                  <DashboardCard data={metrics} key={index} />
                ))
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapState = (state) => ({
  writeKeyModel: state.writeKeyModel,
});

const mapDispatch = (dispatch) => ({
  setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});

export default connect(mapState, mapDispatch)(SavedDashboard);
