/**
 * This card component used on dashboard for saved metrics
 */

import React, { useState, useEffect } from "react";
import "./DashboardCard.css";
import { Card, Menu, Dropdown, notification, Spin } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import LineCharts from "../LineCharts/LineCharts";
import TableChart from "../TableChart/TableChart";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import CountChart from "../CountChart/CountChart";
import { connect } from "react-redux";


function DashboardCard(props) {
  //authtoken and writekey
  const [token, ] = useState(props?.writeKeyModel?.token);
  const [writeKey, ] = useState(props?.writeKeyModel?.user);

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  // Real fetched data for graph
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    aggregator,
    chart_type,
    dashboard,
    date_time,
    end_date,
    event,
    filters,
    group_by,
    metrics_name,
    start_date,
    timescale,
  } = props.data;

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
      setLoading(true);
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
      setLoading(false);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    event,
    aggregator,
    filters,
    group_by,
    timescale,
    date_time,
    start_date,
    end_date,
    writeKey
  ]);

  return (
    <div className="DashboardCard">
      <Card
        style={{
          minWidth: "42vw",
          height: "45vh",
          margin: "1% 0% 1% 0%",
          boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
          overflowY: "scroll",
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

        {loading ? (
          <Spin size="large" style={{ margin: "20% 0 0 50%" }} />
        ) : group_by === "" ? (
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

const mapState = (state) => ({
  writeKeyModel: state.writeKeyModel,
});

const mapDispatch = (dispatch) => ({
  setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});

export default connect(mapState, mapDispatch)(DashboardCard);
