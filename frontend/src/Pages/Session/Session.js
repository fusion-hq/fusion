/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect } from "react";
import "./Session.css";
import { useHistory } from "react-router-dom";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import {
  Select,
  DatePicker,
  Table,
  Menu,
  Dropdown,
  Button,
  message,
} from "antd";
import { ReloadOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import Tags from "../../Components/TrendsEditor/Tags";
import moment from "moment";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { connect } from "react-redux";
import useSessions from "../../api/hooks/useSessions";
import { useQueryClient } from "react-query";

function Session(props) {
  const history = useHistory();
  const queryClient = useQueryClient();

  const [token, ] = useState(props?.writeKeyModel?.token);
  const [writeKey, ] = useState(props?.writeKeyModel?.user);

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [userList, setUserList] = useState([]);
  const [whereFilterDropdownVisible, setWhereFilterDropdownVisible] =
    useState(false);
  const [DateRangeFilterDropdownVisible, setDateRangeFilterDropdownVisible] =
    useState(false);

  //pagination
  const [page, setPage] = useState(1);

  // used by WHERE property popup state auto visibility
  const [filterTags, setFilterTags] = useState([]);
  const [selectedFilterProperty, setSelectedFilterProperty] = useState("");
  const [selectedFilterOperator, setSelectedFilterOperator] = useState("");
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  const [availableUserPropertyForSelect, setAvailableUserPropertyForSelect] =
    useState([]);
  const [availablePropertyValueForSelect, setAvailablePropertyValueForSelect] =
    useState([]);

  //States used for Date Time
  const [selectedDateTimeRange, setSelectedDateTimeRange] =
    useState("All time");
  const [displayDateTimeRange, setDisplayDateTimeRange] = useState("All time");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //componnets from antd
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  // handles change in date range picker selector
  function handleDatePickerValueChange(date, dateString) {
    //console.log(date, dateString);
    //console.log(dateString);
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  }

  // handles change in date time range selector value
  function handleDateTimeRangeSelectChange(value) {
    if (value === "Date range") {
      setSelectedDateTimeRange(value);
      setDateRangeFilterDropdownVisible(true);
    } else {
      setSelectedDateTimeRange(value);
      setDisplayDateTimeRange(value);
      setDateRangeFilterDropdownVisible(false);
      setStartDate("");
      setEndDate("");
    }
    //console.log(`selected ${value}`);
  }

  // Selector handlers used for WHERE section
  function handleFilterPropertySelect(value) {
    if (value !== undefined) {
      setSelectedFilterProperty(value);
      getAllUserPropertyValue();
      //console.log(value);
    } else setSelectedFilterProperty("");
  }
  function handleFilterOperatorSelect(value) {
    if (value !== undefined) {
      setSelectedFilterOperator(value);
      //console.log(value);
    } else setSelectedFilterOperator("");
  }

  function handleFilterValueSelect(value) {
    if (value !== undefined) {
      setSelectedFilterValue(value);
      //console.log(value);
    } else setSelectedFilterValue("");
  }

  // Date range select menu
  const customDateRangeMenu = (
    <Menu
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: "5%",
        minWidth: "380px",
      }}
    >
      <p>Select a time range</p>
      <span>
        <RangePicker
          onChange={handleDatePickerValueChange}
          format="YYYY-MM-DD"
        />
      </span>

      <Button
        style={{ marginTop: "10px" }}
        onClick={() => {
          setDisplayDateTimeRange(`${startDate} to ${endDate}`);
          setDateRangeFilterDropdownVisible(false);
        }}
      >
        Add
      </Button>
    </Menu>
  );

  // Removes a FilterTag whose id is passed as argument
  const deleteFilterTag = (id) => {
    const newFilterTags = [...filterTags].filter(
      (filterTag) => filterTag.id !== id
    );
    setFilterTags(newFilterTags);
  };

  //Saves values of filter input fields in filterTags state
  const saveFilter = () => {
    // check if filter selecttor are not empty and then save the filter tag
    //console.log(filterTags);
    if (
      selectedFilterProperty !== "" &&
      selectedFilterOperator !== "" &&
      selectedFilterValue !== ""
    ) {
      setFilterTags([
        ...filterTags,
        {
          id: filterTags.length,
          Property: selectedFilterProperty,
          Operator: selectedFilterOperator,
          Value: selectedFilterValue,
        },
      ]);
      setWhereFilterDropdownVisible(false);
    } else {
      message.warning("Select all fields !");
    }
  };

  //WHERE filter select menu
  const whereFilterMenu = (
    <Menu
      bordered
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: "5%",
        minWidth: "380px",
      }}
    >
      <span>
        <p style={{ marginBottom: "2px" }}>
          Only users with below condition will be shown
        </p>
        <Select
          allowClear
          showSearch
          bordered={true}
          placeholder="Property"
          dropdownStyle={{ minWidth: "150px" }}
          style={{ minWidth: "110px", margin: "10px 10px 10px 0px" }}
          onChange={handleFilterPropertySelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {availableUserPropertyForSelect}
        </Select>
        <Select
          allowClear
          showSearch
          bordered={true}
          placeholder="Operator"
          dropdownStyle={{ minWidth: "150px" }}
          style={{ minWidth: "50px", margin: "10px 10px 10px 0px" }}
          onChange={handleFilterOperatorSelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="is equal">is equal</Option>
          <Option value="is not equal">is not equal</Option>
          <Option value="contain">constain</Option>
          <Option value="not contain">not contain</Option>
        </Select>
        <Select
          allowClear
          showSearch
          bordered={true}
          placeholder="Value"
          dropdownStyle={{ minWidth: "150px" }}
          style={{ minWidth: "50px", margin: "10px 0px 10px 0px" }}
          onChange={handleFilterValueSelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {availablePropertyValueForSelect}
        </Select>
      </span>

      <span style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          style={{ margin: "10px 10px 0px 0px" }}
          onClick={saveFilter}
          type="primary"
        >
          Add
        </Button>
        <Button
          style={{ margin: "10px 0px 0px 0px" }}
          onClick={() => {
            setWhereFilterDropdownVisible(false);
          }}
          type="primary"
          ghost
        >
          Done
        </Button>
      </span>
    </Menu>
  );

  const columns = [
    {
      title: "User",
      dataIndex: "email",
    },
    {
      title: "User ID",
      dataIndex: "user_id",
    },
    {
      title: "Recorded at",
      dataIndex: "timestamp",
      key: "timestamp",
      render: timestamp => <div>{moment(timestamp).fromNow()}</div> 
    }
  ];

  const sessionData = useSessions(JSON.stringify(filterTags), selectedDateTimeRange, startDate, endDate, writeKey, page);
  
  // Manipulate DB from sessionData
  const getAllSession = () => {
    try {
      const users = sessionData.data?.data;

      if(users) {
        users.map((user) => {
          if (user.user_id) {
            user.email = `Visitor${user.user_id.substr(user.user_id.length - 5)}`;
          } else {
            user.email = "";
          }
          return 0;
        });
  
        setUserList(users);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch all avaliable event type from DB using APIs
  const getAllUserProperty = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/user-properties?writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const usersProperties = await response.json();
      //Array of only event name for keyword searching
      // const eventPropertyKeywordList = eventsProperties.map(
      //   (eventPropertyName) => eventPropertyName.properties
      // );
      // setEventPropertyKeywordList(eventPropertyKeywordList);

      const AvailableUserPropertyForSelect = usersProperties.map(
        (userProperty) => (
          <Option value={userProperty.properties}>
            {userProperty.properties}
          </Option>
        )
      );
      setAvailableUserPropertyForSelect(AvailableUserPropertyForSelect);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch possible value for a filter property from DB
  const getAllUserPropertyValue = async (property) => {
    try {
      const response = await fetch(
        `${serverUrl}/user-property-value?propertyName=${property}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const propertyValuesName = await response.json();

      //console.log(propertyValuesName);
      const AvailablePropertyValueForSelect = propertyValuesName.map(
        (propertyValueName) => (
          <Option value={propertyValueName[`${property}`]}>
            {propertyValueName[`${property}`]}
          </Option>
        )
      );

      setAvailablePropertyValueForSelect(AvailablePropertyValueForSelect);
    } catch (error) {
      console.log(error.message);
    }
  };

  //fetch available user porperties
  useEffect(() => {
    getAllUserProperty();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch available filter value for a filter property passed,
  // at new render or if new filter property is selected
  useEffect(() => {
    getAllUserPropertyValue(selectedFilterProperty);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilterProperty]);

  useEffect(() => {
    getAllSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    sessionData
  ]);

  return (
    <div className="Session">
      <div className="main-container">
        <Sidenav />
        <div className="content-container">
          <div className="content">
            <div className="header">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h1>Session</h1>
                  <p>Session recordings of user screens</p>
                </div>
              </div>
              <div className="controllers">
                <Dropdown
                  overlay={customDateRangeMenu}
                  visible={DateRangeFilterDropdownVisible}
                  placement="bottomLeft"
                  arrow
                >
                  <Select
                    bordered={true}
                    value={displayDateTimeRange}
                    dropdownStyle={{
                      minWidth: "200px",
                    }}
                    style={{
                      fontWeight: "600",
                    }}
                    onChange={handleDateTimeRangeSelectChange}
                    listHeight={420}
                  >
                    <Option value="Today">Today</Option>
                    <Option value="Yesterday">Yesterday</Option>
                    {/* <Option value="Last 24 hours">Last 24 hours</Option>
              <Option value="Last 48 hours">Last 48 hours</Option>
              <Option value="Last 7 days">Last 7 days</Option>
              <Option value="Last 14 days">Last 14 days</Option> */}
                    <Option value="Last 30 days">Last 30 days</Option>
                    <Option value="Last 90 days">Last 90 days</Option>
                    {/* <Option value="This Month">This Month</Option>
              <Option value="Previous Month">Previous Month</Option>
              <Option value="Year to date">Year to date</Option> */}
                    <Option value="All time">All time</Option>
                    <Option value="Date range">Date range</Option>
                  </Select>
                </Dropdown>
                <Dropdown
                  overlay={whereFilterMenu}
                  visible={whereFilterDropdownVisible}
                  placement="bottomLeft"
                  arrow
                >
                  <Button
                    onClick={() => {
                      setWhereFilterDropdownVisible(true);
                    }}
                    style={{ margin: "0px 0px 0px 15px" }}
                  >
                    Add Filter
                  </Button>
                </Dropdown>
                <Button
                  type="primary"
                  icon={<ReloadOutlined />}
                  style={{ margin: "5px 0px 10px 15px" }}
                  onClick={() => {
                    setPage(1);
                    queryClient.invalidateQueries('sessions');
                    getAllSession();
                  }}
                >
                  Refresh
                </Button>
                <Button
                  type="primary"
                  icon={<LeftOutlined />}
                  style={{ margin: "5px 0px 10px 15px" }}
                  onClick={() => {
                    if (page > 1) {
                      setPage((page) => page - 1);
                    }
                  }}
                >
                  Previous
                </Button>
                <Button
                  type="primary"
                  icon={<RightOutlined />}
                  style={{ margin: "5px 0px 10px 15px" }}
                  onClick={() => {
                    setPage((page) => page + 1);
                  }}
                >
                  Next
                </Button>
              </div>

              {filterTags.map((filterTag, index) => (
                <Tags
                  deleteFilterTag={deleteFilterTag}
                  filterTag={filterTag}
                  key={index}
                />
              ))}
            </div>
            <Table
              className="user-table"
              columns={columns}
              dataSource={userList}
              loading={sessionData.isloading}
              pagination={false}
              rowKey={(record) => {
                return record.sessionid;
              }}
              size="small"
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(`/recording/${record.sessionid}`);
                  }, // click row
                };
              }}
              expandable={{
                expandedRowRender: (record) => (
                  <>
                    <SyntaxHighlighter language="json" style={monokai}>
                      {JSON.stringify(record.properties, null, "\t")}
                    </SyntaxHighlighter>
                  </>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapState = (state) => ({
  writeKeyModel: state.writeKeyModel,
});

const mapDispatch = (dispatch) => ({
  setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});

export default connect(mapState, mapDispatch)(Session);
