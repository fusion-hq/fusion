/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

 import React from "react";
 import "./FunnelChart.css";
 import { Bar } from "react-chartjs-2";
 import ChartDataLabels from "chartjs-plugin-datalabels";
 import moment from "moment";
 import { Empty } from "antd";
 import { useThemeSwitcher } from "react-css-theme-switcher";
 
 function FunnelChart({ jsonData, groupBy, graphType }) {
   const { currentTheme } = useThemeSwitcher();
   //console.log(currentTheme);
 
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
   var graphTypeProperty = graphType;
 
   // Map all date values into single array (eg: ["2016", "2017", "2018", "2019"])
 
   var labels, values, maxDataValue, unfilled;
 
   if (graphTypeProperty !== "funnel") {
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
     values = jsonData.map(function (e) {
       return e.count;
     });
 
     maxDataValue = Math.max(...values);
 
     unfilled = jsonData.map(function (e) {
       console.log(typeof maxDataValue, typeof e.count);
       return (maxDataValue - parseInt(e.count)).toString;
     });
   } else {
     //labels for funnel graph
     labels = jsonData.map(function (e) {
       return e[0].event;
     });
 
     // Map all count values into single array (eg: ["10", "25", "55", "120"])
     values = jsonData.map(function (e) {
       return e[0].count;
     });
 
     maxDataValue = Math.max(...values);
 
     unfilled = jsonData.map(function (e) {
       console.log((maxDataValue - parseInt(e[0].count)).toString);
       return maxDataValue - parseInt(e[0].count);
     });
     // console.log(labels);
     // console.log(values);
   }
 
   // console.log(labels); // ["2016", "2017", "2018", "2019"]
 
   //console.log(`test${values}`); // ["10", "25", "55", "120"]
 
   //
 
   //setting of actual graph line
   const data = {
     labels: labels,
     datasets: [
       {
         label: "Completed",
         data: values,
         backgroundColor: ["rgba(26, 144, 255, 1)"],
         hoverBackgroundColor: ["rgba(26, 144, 255, 0.8)"],
         borderColor: ["rgba(26, 144, 255, 0.8)"],
         borderWidth: 1,
         datalabels: {
           anchor: "start",
           align: "end",
           // offeset: "0px",
           padding: 10,
         },
       },
       {
         label: "Dropoff",
         data: unfilled,
         backgroundColor: ["rgba(26, 144, 255, 0.4)"],
         hoverBackgroundColor: ["rgba(26, 144, 230, 0.3)"],
         borderColor: ["rgba(26, 144, 255, 0.8)"],
         borderWidth: 1,
         datalabels: {
           display: false,
           anchor: "start",
           align: "end",
           // offeset: "0px",
           padding: 10,
         },
       },
     ],
   };
 
   //setting of graph body
   const options = {
     scales: {
       x: {
         stacked: true,
         position: "bottom",
         display: true,
         grid: {
           display: false,
         },
 
         ticks: {
           display: true,
           color: xTicksColor,
           font: {
             weight: "bold",
             size: 13,
           },
           callback: function (val, index) {
             let currentTickValue = this.getLabelForValue(val);
             if (currentTickValue.length > 15) {
               return currentTickValue.substr(0, 15) + "..."; //truncate
             } else {
               return currentTickValue;
             }
           },
           // callback: function (val, index) {
           //   // Hide the label of every 2nd dataset
           //   return index % 2 === 0 ? this.getLabelForValue(val) : "";
           // },
           padding: 0,
           autoSkip: true,
           maxTicksLimit: 10,
         },
       },
       y: {
         stacked: true,
         display: true,
         grid: {
           color: yGridColor,
           borderDash: [8, 4],
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
           max: maxDataValue + 100,
         },
       },
     },
     plugins: {
       legend: {
         display: false,
       },
       datalabels: {
         color: xTicksColor,
         font: {
           weight: "bold",
           size: 14,
         },
         clamp: true,
         formatter: function (value) {
           return (
             "Users\t" +
             value +
             "\n" +
             parseInt((value / maxDataValue) * 100) +
             "% "
           );
           // eq. return ['line1', 'line2', value]
         },
       },
       tooltip: {
         padding: "30",
         bodyFont: { weight: "bold", size: 14 },
         footerFont: { weight: "bold", size: 14 },
         backgroundColor: tooltipColor,
         displayColors: false,
         // callbacks: {
         //   title: function (item, everything) {
         //     return;
         //   },
         // },
       },
       plugins: [ChartDataLabels],
     },
   };
 
   return (
     <div className="LineCharts">
       <div className="graph-container">
         <Bar data={data} options={options} plugins={[ChartDataLabels]} />
       </div>
     </div>
   );
 }
 
 export default FunnelChart;