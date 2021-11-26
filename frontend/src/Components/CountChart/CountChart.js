/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import "./CountChart.css";
import { Empty, Statistic } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";

function CountChart({ jsonData }) {
  const { currentTheme } = useThemeSwitcher();
  console.log(currentTheme);

  //check if data is available
  if (jsonData.length === 0) {
    //if no data, show no data icon
    return <Empty style={{ margin: "15% 0% 0% 0%" }} />;
  }
  // when data available execute rest code

  var latestStat = jsonData[jsonData.length - 1].count;

  return (
    <div className="CountChart">
      <div className="graph-container">
        <Statistic
          value={latestStat}
          valueStyle={{
            marginTop: "10vh",
            fontSize: "3vw",
            fontWeight: "500",
            wordWrap: "breakWord",
          }}
        />
      </div>
    </div>
  );
}

export default CountChart;
