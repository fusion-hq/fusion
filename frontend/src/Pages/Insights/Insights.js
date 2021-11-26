/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useContext } from "react";
import "./Insights.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Input, Tabs } from "antd";
import Trends from "../../Components/TrendsEditor/TrendsEditor.js";
import Funnel from "../../Components/Funnel/Funnel.js";
import { SearchQueryContext } from "../../Context/SearchQueryContext";

function Insights() {
  const { Search } = Input;
  const { TabPane } = Tabs;

  const [, setSearchQuery] = useContext(SearchQueryContext);

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
              style={{ width: "100%", marginTop: "20px", display: "none" }}
              size="large"
              enterButton="Search"
              placeholder="Ask whats happening with your product eg: Show unique pageview by browser as bar chart"
              onSearch={handleSearchInputChange}
            />

            <Tabs
              defaultActiveKey="1"
              size="large"
              style={{ marginTop: "10px" }}
            >
              <TabPane tab="Trends" key="1">
                <Trends />
              </TabPane>
              <TabPane tab="Funnels" key="2">
                <Funnel />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Insights;
