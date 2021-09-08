/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import "./LineGraph.css";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";
import moment from "moment";
import { Empty } from "antd";

function LineGraph({ data, timescale }) {
  var timestampStyle = "lll";

  switch (timescale) {
    case "minute":
      timestampStyle = "LTS";
      break;

    case "hour":
      timestampStyle = "LT";
      break;

    case "day":
      timestampStyle = "LL";
      break;
    case "week":
      timestampStyle = "W";
      break;

    case "month":
      timestampStyle = "M";
      break;

    case "year":
      timestampStyle = "YYYY";
      break;

    default:
      timestampStyle = "LT";
      break;
  }

  if (data.length === 0) {
    return <Empty style={{ margin: "15% 0% 0% 0%" }} />;
    /**<div style={{ margin: "20% 0% 0% 35%" }}>No data available...</div> */
  }

  // Map JSON values back to label array
  data.map((e) => {
    const date = moment(e.approx_timestamp).format(timestampStyle);
    e.approx_timestamp = date;
    return date;
  });

  return (
    <div className="LineGraph">
      <div className="graph-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#329cff" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#329cff" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <XAxis
              scale="auto"
              domain={[0, "auto"]}
              dataKey="approx_timestamp"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1d293b" }}
            />
            <YAxis
              datakey="count"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1d293b" }}
            />

            <Tooltip cursor={false} content={<CustomTooltip />} />
            <CartesianGrid opacity={0.6} vertical={false} />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#1890ff"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Resturns a custom html element
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>Count: {payload[0].value}</p>
        <p>Date: {label}</p>
      </div>
    );
  }
  return null;
}

export default LineGraph;
