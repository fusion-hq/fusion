/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import "./CountChart.css";
import moment from "moment";
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

  //check current theme and change graph colors
  if (currentTheme === "light") {
    var xTicksColor = "#333333",
      yGridColor = "#efefef",
      yTicksColor = "#333333",
      tooltipColor = "#1d293b";
  } else if (currentTheme === "dark") {
    xTicksColor = "#dedede";
    yGridColor = "#333333";
    yTicksColor = "#dedede";
    tooltipColor = "#000000";
  }

  // Map all date values into single array (eg: ["2016", "2017", "2018", "2019"])
  const labels = jsonData.map(function (e) {
    const date = moment(e.approx_timestamp).format("lll");
    return date;
  });
  // console.log(labels); // ["2016", "2017", "2018", "2019"]

  // Map all count values into single array (eg: ["10", "25", "55", "120"])
  const values = jsonData.map(function (e) {
    return e.count;
  });
  //console.log(values); // ["10", "25", "55", "120"]

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
