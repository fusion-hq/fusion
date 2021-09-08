/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import "./AreaGraph.css";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import moment from "moment";

function AreaGraph({ data }) {
  data.map((e) => {
    const date = moment(e.approx_timestamp).format("lll");
    e.approx_timestamp = date;
    return date;
  });
  return (
    <div className="AreaGraph">
      <div className="graph-container">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 10, left: -30, bottom: 10 }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#329cff" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#329cff" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="count"
              stroke="#1890ff"
              fill="url(#color)"
            />

            <XAxis
              dataKey="approx_timestamp"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1d293b" }}
            />
            <YAxis
              type="number"
              domain={[0, "auto"]}
              allowDataOverflow={false}
              datakey="count"
              axisLine={false}
              tickLine={false}
              tickCount={6}
              tick={{ fill: "#1d293b" }}
            />

            <Tooltip cursor={false} content={<CustomTooltip />} />
            <CartesianGrid opacity={0.4} vertical={false} />
          </AreaChart>
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

export default AreaGraph;
