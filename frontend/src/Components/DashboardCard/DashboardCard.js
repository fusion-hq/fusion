/**
 * This card component used on dashboard for saved metrics
 */

import React, { useState, useEffect, useContext } from "react";
import "./DashboardCard.css";
import { Card, Menu, Dropdown, notification } from "antd";
import { MoreOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import { WriteKeyContext } from "../../Context/WriteKeyContext";
import LineCharts from "../LineCharts/LineCharts";
import TableChart from "../TableChart/TableChart";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import CountChart from "../CountChart/CountChart";

export default function DashboardCard({ data, key }) {
  const [accessToken, setAccessToken] = useContext(AccessTokenContext);
  const [writeKey, setWriteKey] = useContext(WriteKeyContext);
  const [cardOptionDropdownVisible, setCardOptionDropdownVisible] =
    useState(false);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const token = accessToken;
  // Real fetched data for graph
  const [graphData, setGraphData] = useState([]);

  const {
    aggregator,
    chart_type,
    created_at,
    dashboard,
    date_time,
    end_date,
    event,
    filters,
    group_by,
    metrics_id,
    metrics_name,
    start_date,
    timescale,
    write_key,
  } = data;

  const cardOption = (
    <Menu>
      <Menu.Divider />
      <Menu.Item
        danger
        onClick={() => {
          deleteCard(metrics_name, dashboard, writeKey);
        }}
      >
        Delete Card
      </Menu.Item>
    </Menu>
  );

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Deleted Card !",
      description: "Refresh to see change",
    });
  };
  // Fetch real event data from db
  const fetchTrendsData = async (
    event,
    aggregator,
    filters,
    group_by,
    timescale,
    date_time,
    start_date,
    end_date,
    writeKey
  ) => {
    try {
      const response = await fetch(
        `${serverUrl}/trends?event=${event}&aggregator=${aggregator}&filters=${filters}&groupBy=${group_by}&timescale=${timescale}&dateTime=${date_time}&startDate=${start_date}&endDate=${end_date}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const trendsData = await response.json();
      setGraphData(trendsData);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete the saved card from DB
  const deleteCard = async (metrics_name, dashboard, writeKey) => {
    try {
      await fetch(
        `${serverUrl}/delete-metrics?metricsName=${metrics_name}&dashboard=${dashboard}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      openNotificationWithIcon("error");
    } catch (error) {
      console.log(error.message);
    }
  };

  //  fetched new graph data from db when selected variables chnages
  useEffect(() => {
    fetchTrendsData(
      event,
      aggregator,
      filters,
      group_by,
      timescale,
      date_time,
      start_date,
      end_date,
      writeKey
    );
  }, []);

  return (
    <div className="DashboardCard">
      <Card
        style={{
          minWidth: "42vw",
          minHeight: "45vh",
          margin: "1% 0% 1% 0%",
          boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            margin: "-5px 0px 15px 0px",
          }}
        >
          <h1
            className="trends-graph-properties-editor-headers"
            style={{
              margin: "-10px 0px 0px 0px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            {metrics_name}
          </h1>
          <Dropdown
            overlay={cardOption}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <button className="more-button">
              <MoreOutlined />
            </button>
          </Dropdown>
        </span>
        {group_by === "" ? (
          chart_type === "Linear" ? (
            <LineCharts jsonData={graphData} />
          ) : chart_type === "Table" ? (
            <TableChart jsonData={graphData} groupBy={"Time"} />
          ) : chart_type === "Bar" ? (
            <BarChart jsonData={graphData} groupBy={"Time"} />
          ) : chart_type === "Pie" ? (
            <PieChart jsonData={graphData} groupBy={"Time"} />
          ) : chart_type === "Count" ? (
            <CountChart jsonData={graphData} groupBy={"Time"} />
          ) : null
        ) : chart_type === "Table" ? (
          <TableChart jsonData={graphData} groupBy={group_by} />
        ) : chart_type === "Bar" ? (
          <BarChart jsonData={graphData} groupBy={group_by} />
        ) : chart_type === "Pie" ? (
          <PieChart jsonData={graphData} groupBy={group_by} />
        ) : null}
      </Card>
    </div>
  );
}
