/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useContext } from "react";
import "./Insights.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Tabs, Input } from "antd";
import TrendsEditor from "../../Components/TrendsEditor/TrendsEditor.js";
import { SearchQueryContext } from "../../Context/SearchQueryContext";

function Insights() {
  const { TabPane } = Tabs;
  const { Search } = Input;

  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);

  function callback(key) {
    console.log(key);
  }

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "15% 0 0 0",
  };

  const handleSearchInputChange = (value) => {
    let lowercaseQueryString = value.toLowerCase();
    setSearchQuery(lowercaseQueryString);
  };

  return (
    <div className="Insights">
      <div className="main-container">
        <Sidenav />
        <div className="content-container">
          <div className="content">
            <h1 className="header-h1">Insights</h1>
            <p className="header-p">Edit visualize and save unique insights.</p>

            <Search
              style={{ width: "100%", marginTop: "20px" }}
              size="large"
              enterButton="Search"
              placeholder="Ask whats happening with your product eg: Show unique pageview by browser as bar chart"
              onSearch={handleSearchInputChange}
            />
            <TrendsEditor />

            {/* <Tabs
              defaultActiveKey="1"
              onChange={callback}
              size="large"
              style={{ marginTop: "10px" }}
            >
              <TabPane tab="Trends" key="1">
                <TrendsEditor />
              </TabPane>
              <TabPane tab="Funnels" key="2">
                <div style={centerStyle}>
                  <h1> 🏗 Coming Soon ..</h1>
                  <p> Create multi-step funnels</p>
                </div>
              </TabPane>
              <TabPane tab="Session" key="3">
                <div style={centerStyle}>
                  <h1> 🏗 Coming Soon ..</h1>
                  <p> Visualize session time</p>
                </div>
              </TabPane>
              <TabPane tab="Campaign" key="4">
                <div style={centerStyle}>
                  <h1> 🏗 Coming Soon ..</h1>
                  <p> Create marketing campaign links</p>
                </div>
              </TabPane>
              <TabPane tab="Retention" key="5">
                <div style={centerStyle}>
                  <h1> 🏗 Coming Soon ..</h1>
                  <p> User retention over time</p>
                </div>
              </TabPane>
              <TabPane tab="Userflow" key="6">
                <div style={centerStyle}>
                  <h1> 🏗 Coming Soon ..</h1>
                  <p> User flow in your app</p>
                </div>
              </TabPane>
            </Tabs> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Insights;
