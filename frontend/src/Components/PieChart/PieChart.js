/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import "./PieChart.css";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";
import { Empty } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";

function PieChart({ jsonData, groupBy }) {
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
    var tooltipColor = "#1d293b";
  } else if (currentTheme === "dark") {
    tooltipColor = "#000000";
  }

  var groupByProperty = groupBy;

  // Map all date values into single array (eg: ["2016", "2017", "2018", "2019"])

  var labels;

  if (groupByProperty === "Time") {
    labels = jsonData.map(function (e) {
      const date = moment(e.approx_timestamp).format("lll");
      return date;
    });
  } else {
    labels = jsonData.map(function (e) {
      const propertyValue = e[groupByProperty];
      return propertyValue;
    });
  }

  // Map all count values into single array (eg: ["10", "25", "55", "120"])
  const values = jsonData.map(function (e) {
    return e.count;
  });
  //console.log(values); // ["10", "25", "55", "120"]

  //setting of actual graph line

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Value",
        data: values,
        backgroundColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(255, 71, 26, 0.8)",
          "rgba(255, 201, 26, 0.8)",
          "rgba(26, 255, 26, 0.8)",
          "rgba(125, 26, 255, 0.8)",
          "rgba( 255, 26, 141, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(255, 71, 26, 0.8)",
          "rgba(255, 201, 26, 0.8)",
          "rgba(26, 255, 26, 0.8)",
          "rgba(125, 26, 255, 0.8)",
          "rgba( 255, 26, 141, 0.8)",
        ],
        borderColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(255, 71, 26, 0.8)",
          "rgba(255, 201, 26, 0.8)",
          "rgba(26, 255, 26, 0.8)",
          "rgba(125, 26, 255, 0.8)",
          "rgba( 255, 26, 141, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  };

  /**
 

        backgroundColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(255, 71, 26, 0.8)",
          "rgba(255, 201, 26, 0.8)",
          "rgba(26, 255, 26, 0.8)",
          "rgba(125, 26, 255, 0.8)",
          "rgba( 255, 26, 141, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(255, 71, 26, 0.8)",
          "rgba(255, 201, 26, 0.8)",
          "rgba(26, 255, 26, 0.8)",
          "rgba(125, 26, 255, 0.8)",
          "rgba( 255, 26, 141, 0.8)",
        ],
        borderColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(255, 71, 26, 0.8)",
          "rgba(255, 201, 26, 0.8)",
          "rgba(26, 255, 26, 0.8)",
          "rgba(125, 26, 255, 0.8)",
          "rgba( 255, 26, 141, 0.8)",
        ],


                backgroundColor: [
          "rgba(26, 144, 255, 0.6)",
          "rgba(98, 26, 255, 0.6)",
          "rgba(255, 26, 221, 0.6)",
          "rgba(255, 60, 26, 0.6)",
          "rgba(255, 136, 26, 0.6)",
          "rgba( 255, 251, 26, 0.6)",
          "rgba( 68, 255, 26, 0.6)",
        ],
        borderColor: [
          "rgba(26, 144, 255, 0.8)",
          "rgba(98, 26, 255, 0.8)",
          "rgba(255, 26, 221, 0.8)",
          "rgba(255, 60, 26, 0.8)",
          "rgba(255, 136, 26, 0.8)",
          "rgba( 255, 251, 26, 0.8)",
          "rgba( 68, 255, 26, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(26, 144, 255, 1)",
          "rgba(98, 26, 255, 1)",
          "rgba(255, 26, 221, 1)",
          "rgba(255, 60, 26, 1)",
          "rgba(255, 136, 26, 1)",
          "rgba( 255, 251, 26, 1)",
          "rgba( 68, 255, 26, 1)",
        ],



 */

  //setting of graph body
  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      tooltip: {
        padding: "20",
        bodyFont: { weight: "bold" },
        footerFont: { weight: "bold" },
        backgroundColor: tooltipColor,
        displayColors: false,
      },
    },
  };

  return (
    <div className="PieChart">
      <div className="graph-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
