/**
 * Uses recarts for displaying area
 * charts used for visualising pageviews
 */

import React from "react";
import moment from "moment";
import { Table, Empty } from "antd";

function TableChart({ jsonData, groupBy }) {
  //check if data is available
  if (jsonData.length === 0) {
    //if no data, show no data icon
    return <Empty style={{ margin: "15% 0% 0% 0%" }} />;
  }

  //console.log(jsonData);

  var groupByProperty = groupBy;

  const dataSource = [
    {
      browser: "Safari",
      count: "25",
    },
    {
      browser: "Chrome",
      count: "30",
    },
  ];

  const columns = [
    {
      title: groupByProperty,
      dataIndex: groupByProperty,
    },
    {
      title: "Count",
      dataIndex: "count",
    },
  ];

  // when data available execute rest code

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

  // Map all approx_timestamp key values to create new Time key with value as readable date time
  jsonData.map((e) => {
    e.Time = moment(e.approx_timestamp).format("lll");
  });

  return (
    <div className="TableChart">
      <div>
        <Table
          style={{ margin: "10px 0px 0px 0px" }}
          className="groupby-table"
          dataSource={jsonData}
          columns={columns}
          size="small"
          pagination={false}
        />
      </div>
    </div>
  );
}

export default TableChart;
