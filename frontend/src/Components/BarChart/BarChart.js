/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { Empty } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";

function BarChart({ jsonData, groupBy }) {
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

  /**
 with groupby filter
  [
  {
    "count": "25",
    "browser": "Safari"
  },
  {
    "count": "30",
    "browser": "Chrome"
  }
]
 without groupby filter
[
  {
    "count": "2",
    "approx_timestamp": "2021-05-04T18:30:00.000Z"
  },
  {
    "count": "1",
    "approx_timestamp": "2021-05-19T18:30:00.000Z"
  },
]
 */

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

  // console.log(labels); // ["2016", "2017", "2018", "2019"]

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
        borderWidth: 1,
      },
    ],
  };

  //setting of graph body
  const options = {
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: xTicksColor,
          font: {
            size: 12,
          },
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        display: true,
        grid: {
          color: yGridColor,
        },

        ticks: {
          display: true,
          color: yTicksColor,
          stepSize: 1,

          font: {
            size: 15,
          },
          autoSkip: true,
          maxTicksLimit: 8,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
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
    <div className="LineCharts">
      <div className="graph-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
