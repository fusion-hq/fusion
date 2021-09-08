/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect, useContext } from "react";
import "./User.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import {
  Divider,
  Card,
  Table,
  Button,
  Select,
  Menu,
  Dropdown,
  Tooltip,
  message,
  DatePicker,
  Modal,
  Form,
  Input,
  notification,
} from "antd";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import { WriteKeyContext } from "../../Context/WriteKeyContext";
import { Link, useParams } from "react-router-dom";
import { Trash, Trash2 } from "react-feather";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import Tags from "../../Components/TrendsEditor/Tags";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

function User() {
  const { uuid, userId, deviceId } = useParams();
  const [accessToken, setAccessToken] = useContext(AccessTokenContext);
  const [writeKey, setWriteKey] = useContext(WriteKeyContext);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const token = accessToken;

  const [userProfile, setUserProfile] = useState({});
  const [eventList, setEventList] = useState();
  const [userIds, setUserIds] = useState([]);
  const [userProfileProperties, setUserProfileProperties] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState("All events");
  const [availableEventNameForSelect, setAvailableEventNameForSelect] =
    useState([]);
  const [whereFilterDropdownVisible, setWhereFilterDropdownVisible] =
    useState(false);
  const [DateRangeFilterDropdownVisible, setDateRangeFilterDropdownVisible] =
    useState(false);

  // Used by search input
  const [eventPropertyKeywordList, setEventPropertyKeywordList] = useState([]);

  // used by WHERE property popup state auto visibility
  const [filterTags, setFilterTags] = useState([]);
  const [selectedFilterProperty, setSelectedFilterProperty] = useState("");
  const [selectedFilterOperator, setSelectedFilterOperator] = useState("");
  const [selectedFilterValue, setSelectedFilterValue] = useState("");
  const [availableEventPropertyForSelect, setAvailableEventPropertyForSelect] =
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

  // event_id column is used as unique key for each row for row expander
  const eventTableColumns = [
    {
      title: "Event",
      dataIndex: "event",
    },
    {
      title: "Page",
      dataIndex: "page",
    },
    {
      title: "Source",
      dataIndex: "source",
    },
    {
      title: "Time",
      dataIndex: "timestamp",
    },
  ];

  // used in table for show all user properties
  const profilePropertyTableColumn = [
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    //console.log("params", pagination, filters, sorter, extra);
  }

  // Selector handlers used for SHOW section
  function handleEventNameSelect(value) {
    if (value === undefined || value === "") {
      setSelectedEvent("All events");
    } else {
      setSelectedEvent(value);
    }

    //console.log(value);
  }

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
      fetchFilterPropertyValue();
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
      console.log("Select all fields !");
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
        <p style={{ marginBottom: "2px" }}>Select filter property and value</p>
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
          {availableEventPropertyForSelect}
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

  // Fetch users profile data
  const getUserProfile = async (uuid, userId, deviceId, writeKey) => {
    try {
      const token = accessToken;

      const response = await fetch(
        `${serverUrl}/user-personal-data?uuid=${uuid}&userId=${userId}&deviceId=${deviceId}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userProfileData = await response.json();
      setUserProfile(userProfileData);
      setUserIds(userProfileData.user_ids);

      //format userProfileData.properties object to array to render antd Table
      let profilePropertiesDataForTable = [],
        propertiesObject = userProfileData.properties;
      var keyCount = 1;
      for (const property in propertiesObject) {
        let tableRowData = {
          property: `${property}`,
          value: `${propertiesObject[property]}`,
          key: `${keyCount}`,
        };
        profilePropertiesDataForTable.push(tableRowData);
        keyCount++;
      }
      setUserProfileProperties(profilePropertiesDataForTable);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getUserPerformedEvents = async (
    selectedEvent,
    userIds,
    filterTags,
    selectedDateTimeRange,
    startDate,
    endDate,
    writeKey
  ) => {
    try {
      const token = accessToken;
      let filterString = JSON.stringify(filterTags);
      let userIdListString = JSON.stringify(userIds);

      const response = await fetch(
        `${serverUrl}/user-performed-events?event=${selectedEvent}&userIds=${userIdListString}&filters=${filterString}&dateTime=${selectedDateTimeRange}&startDate=${startDate}&endDate=${endDate}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const events = await response.json();
      let eventList = [];
      for (let id in events) {
        events[id].timestamp = moment(events[id].timestamp).format("lll");
        // pretty print the properties object after stringifying
        // events[id].properties = JSON.stringify(
        //   events[id].properties,
        //   null,
        //   "\t"
        // );
        eventList.push(events[id]);
      }
      setEventList(eventList);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch all avaliable event type from DB using APIs
  const getAllEventProperty = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/events-properties?writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const eventsProperties = await response.json();
      //Array of only event name for keyword searching
      // const eventPropertyKeywordList = eventsProperties.map(
      //   (eventPropertyName) => eventPropertyName.properties
      // );
      // setEventPropertyKeywordList(eventPropertyKeywordList);

      const AvailableEventPropertyForSelect = eventsProperties.map(
        (eventProperty) => (
          <Option value={eventProperty.properties}>
            {eventProperty.properties}
          </Option>
        )
      );
      setAvailableEventPropertyForSelect(AvailableEventPropertyForSelect);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch possible value for a filter property from DB
  const fetchFilterPropertyValue = async (property) => {
    try {
      const response = await fetch(
        `${serverUrl}/filter-property-value?propertyName=${property}&writeKey=${writeKey}`,
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

  // Fetch all avaliable event type from DB using APIs
  const getAllEventsName = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/events-name?writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const eventsName = await response.json();
      /** Older manual method
        const AvailableEventNameForSelect = [];
        for (let id in eventsName) {
          AvailableEventNameForSelect.push(
            <Option key={eventsName[id].event}>{eventsName[id].event}</Option>
          );
        }
        setAvailableEventNameForSelect(AvailableEventNameForSelect);
        */
      const AvailableEventNameForSelect = eventsName.map((eventName) => (
        <Option value={eventName.event}>{eventName.event}</Option>
      ));
      setAvailableEventNameForSelect(AvailableEventNameForSelect);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserProfile(uuid, userId, deviceId, writeKey);
  }, [uuid, userId, deviceId, writeKey]);

  useEffect(() => {
    getAllEventsName();
  }, []);

  useEffect(() => {
    getAllEventProperty();
  }, []);

  // fetch available filter value for a filter property passed,
  // at new render or if new filter property is selected
  useEffect(() => {
    fetchFilterPropertyValue(selectedFilterProperty);
  }, [selectedFilterProperty]);

  useEffect(() => {
    getUserPerformedEvents(
      selectedEvent,
      userIds,
      filterTags,
      selectedDateTimeRange,
      startDate,
      endDate,
      writeKey
    );
  }, [
    selectedEvent,
    userIds,
    filterTags,
    selectedDateTimeRange,
    startDate,
    endDate,
    writeKey,
  ]);

  function onChange(pagination, filters, sorter, extra) {
    //console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="User" id="User">
      <div className="main-container">
        <Sidenav subPath={uuid + "/" + userId + "/" + deviceId} />
        <div className="content-container">
          <div className="content">
            <div className="event-section">
              <div className="header">
                <h1>User Profile</h1>
                <p>Personal info and events perfomed by this user</p>
              </div>
              <div className="controllers">
                <Select
                  allowClear
                  value={selectedEvent}
                  showSearch
                  bordered={true}
                  placeholder="Select Event ..."
                  dropdownStyle={{ minWidth: "200px" }}
                  style={{
                    width: "200px",
                  }}
                  onChange={handleEventNameSelect}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {availableEventNameForSelect}
                </Select>

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
                      marginRight: "auto",
                      fontWeight: "600",
                      margin: "0px 0px 0px 15px",
                    }}
                    onChange={handleDateTimeRangeSelectChange}
                    listHeight={420}
                  >
                    <Option value="Today">Today</Option>
                    <Option value="Yesterday">Yesterday</Option>
                    <Option value="Last 24 hours">Last 24 hours</Option>
                    <Option value="Last 48 hours">Last 48 hours</Option>
                    <Option value="Last 7 days">Last 7 days</Option>
                    <Option value="Last 14 days">Last 14 days</Option>
                    <Option value="Last 30 days">Last 30 days</Option>
                    <Option value="Last 90 days">Last 90 days</Option>
                    <Option value="This Month">This Month</Option>
                    <Option value="Previous Month">Previous Month</Option>
                    <Option value="Year to date">Year to date</Option>
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
                    style={{
                      margin: "0px 0px 0px 15px",
                      width: "110px",
                    }}
                  >
                    Add Filter
                  </Button>
                </Dropdown>
              </div>

              <div style={{ marginRight: "auto" }}>
                {filterTags.map((filterTag, index) => (
                  <Tags
                    deleteFilterTag={deleteFilterTag}
                    filterTag={filterTag}
                    key={index}
                  />
                ))}
              </div>

              <Table
                className="event-table"
                columns={eventTableColumns}
                dataSource={eventList}
                onChange={onChange}
                pagination={true}
                size="small"
                rowKey={(record) => {
                  return record.event_id;
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

            <Card
              className="trends-editor-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "left",
                minWidth: "34%",
                minHeight: "90vh",
                margin: "0% 0% 1% 0%",
                boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
              }}
            >
              {userProfile !== "" ? (
                <div>
                  <h3>Name: {userProfile.name}</h3>
                  <h3>Email: {userProfile.email}</h3>
                  <h3>Company: {userProfile.company}</h3>
                  <h3>Phone: {userProfile.phone}</h3>
                  <h3>Plan: {userProfile.plan}</h3>
                  <h3>Team: {userProfile.team}</h3>

                  <h3>
                    First Seen: {moment(userProfile.created_at).format("lll")}
                  </h3>
                </div>
              ) : (
                <h1>Profile Unavailable</h1>
              )}
              <Divider
                style={{
                  marginBottom: "30px",
                  marginTop: "30px",
                  height: "1px",
                }}
              />

              <Table
                className="property-table"
                columns={profilePropertyTableColumn}
                dataSource={userProfileProperties}
                onChange={onChange}
                size="small"
                pagination={false}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
