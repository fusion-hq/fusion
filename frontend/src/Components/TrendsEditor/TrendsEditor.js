/**
 * This the component is used in Insights.js and allows to build trend graph
 */

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import "./TrendsEditor.css";
import {
  Divider,
  Card,
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
import { SearchQueryContext } from "../../Context/SearchQueryContext";

import { useAuth0 } from "@auth0/auth0-react";
import {
  LineChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TableOutlined,
  FieldBinaryOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import Tags from "./Tags";
import LineCharts from "../LineCharts/LineCharts";
import TableChart from "../TableChart/TableChart";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import CountChart from "../CountChart/CountChart";

export default function TrendsEditor() {
  const [accessToken, setAccessToken] = useContext(AccessTokenContext);
  const [writeKey, setWriteKey] = useContext(WriteKeyContext);
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);

  const [availableEventNameForSelect, setAvailableEventNameForSelect] =
    useState([]);
  const [availableEventPropertyForSelect, setAvailableEventPropertyForSelect] =
    useState([]);

  const [whereFilterDropdownVisible, setWhereFilterDropdownVisible] =
    useState(false);
  const [DateRangeFilterDropdownVisible, setDateRangeFilterDropdownVisible] =
    useState(false);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const frontendUrl =
    process.env.REACT_APP_FRONTEND_URL || "http://localhost:4040";

  const token = accessToken;
  const userWriteKey = writeKey;
  const { user } = useAuth0();
  const { email } = user;
  const { Search } = Input;

  //User search input
  const [eventKeywordList, setEventKeywordList] = useState([]);
  const [eventPropertyKeywordList, setEventPropertyKeywordList] = useState([]);
  const [aggrigationKeywordList, setAggrigationKeywordList] = useState([
    "Total",
    "Unique",
  ]);
  const [graphStyleKeywordList, setGraphStyleKeywordList] = useState([
    "Linear",
    "Bar",
    "Pie",
    "Table",
    "Count",
  ]);

  //States used by visual query builder
  const [selectedEvent, setSelectedEvent] = useState("");
  const [eventCollectionType, setEventCollectionType] = useState("Total");
  const [selectedFilterProperty, setSelectedFilterProperty] = useState("");
  const [selectedFilterOperator, setSelectedFilterOperator] = useState("");
  const [selectedFilterValue, setSelectedFilterValue] = useState("");
  const [availablePropertyValueForSelect, setAvailablePropertyValueForSelect] =
    useState([]);
  const [selectedGroupByProperty, setSelectedGroupByProperty] = useState("");

  // used by WHERE property popup state auto visibility
  const [filterTags, setFilterTags] = useState([]);

  //States used by graph card
  const [selectedTimescale, setSelectedTimescale] = useState("day");
  const [selectedGraphType, setSelectedGraphType] = useState("Linear");
  const [selectedDateTimeRange, setSelectedDateTimeRange] = useState("Today");
  const [displayDateTimeRange, setDisplayDateTimeRange] = useState("Today");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Real fetched data for graph
  const [graphData, setGraphData] = useState([]);

  const [isCardModalVisble, setIsCardModalVisible] = useState(false);
  const [isDashboardModalVisible, setIsDashboardModalVisible] = useState(false);

  const [metricsName, setMetricsName] = useState("");
  const [selectedDashboard, setSelectedDashbord] = useState("");
  const [availableDashboardNameForSelect, setAvailableDashboardNameForSelect] =
    useState([]);

  const [dashboardName, setDashboardName] = useState("");
  const [description, setDescription] = useState("");

  //componnets from antd
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const openSavedCardNotification = (type) => {
    notification[type]({
      message: "Saved Card !",
      description: (
        <div>
          <a href={`${frontendUrl}/dashboard/${selectedDashboard}`}>
            Click here to see
          </a>
        </div>
      ),
    });
  };

  const openDashboardCreatedNotification = (type) => {
    notification[type]({
      message: `Dashboard ${dashboardName} created !`,
      description: (
        <div>
          <a href={`${frontendUrl}/dashboard`}>Click here to see</a>
        </div>
      ),
    });
  };

  const handleCardModalOk = () => {
    setIsCardModalVisible(false);
  };

  const handleCardModalCancel = () => {
    setIsCardModalVisible(false);
  };

  const handleDashboardModalOk = () => {
    setIsDashboardModalVisible(false);
  };

  const handleDashboardModalCancel = () => {
    setIsDashboardModalVisible(false);
  };

  const handleDashboardNameInputChange = (event) => {
    event.preventDefault();
    setDashboardName(event.target.value);
  };
  const handleDescriptionInputChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleGraphNameInputChange = (event) => {
    event.preventDefault();
    setMetricsName(event.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Selector handlers saves selected dashboard name from save modal
  function handleDashboardNameSelect(value) {
    if (value === "+ Add New Dashboard") {
      setIsCardModalVisible(false);
      setIsDashboardModalVisible(true);
      setSelectedDashbord("");
    } else {
      setSelectedDashbord(value);
    }
  }

  // Selector handlers used for Graph section
  function handleGraphTimeScaleSelectChange(value) {
    setSelectedTimescale(value);
    //console.log(`selected ${value}`);
  }

  // handles change in graph type selector value
  function handleGraphTypeSelectChange(value) {
    setSelectedGraphType(value);
    //console.log(`selected ${value}`);
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

  // Selector handlers used for SHOW section
  function handleEventNameSelect(value) {
    setSelectedEvent(value);
    //console.log(value);
  }

  function handleEventCollectionType(value) {
    setEventCollectionType(value);
    //console.log(value);
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

  function handleGroupByPropertySelect(value) {
    if (value !== undefined) {
      setSelectedGroupByProperty(value);
    } else setSelectedGroupByProperty("");
    //console.log(selectedGroupByProperty);
  }
  // handles change in date range picker selector
  function handleDatePickerValueChange(date, dateString) {
    //console.log(date, dateString);
    //console.log(dateString);
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  }

  //Search logic
  function searchAggrigation(keyword) {
    // keyword = keyword.toLowerCase();
    if (searchQuery.indexOf(keyword.toLowerCase()) !== -1) {
      console.log(`selected aggrigation is ${keyword}`);
      setEventCollectionType(keyword);
    }
  }

  function searchEvent(keyword) {
    //keyword = keyword.toLowerCase();
    if (searchQuery.indexOf(keyword.toLowerCase()) !== -1) {
      console.log(`selected event is ${keyword}`);
      setSelectedEvent(keyword);
    }
  }

  function searchBreakdownProperty(keyword) {
    //keyword = keyword.toLowerCase();
    if (searchQuery.indexOf("by " + keyword.toLowerCase()) !== -1) {
      console.log(`selected breakdown property is ${keyword}`);
      setSelectedGroupByProperty(keyword);
      setSelectedGraphType("Bar");
    }
  }

  function searchGraphType(keyword) {
    //keyword = keyword.toLowerCase();
    if (searchQuery.indexOf("as " + keyword.toLowerCase()) !== -1) {
      console.log(`selected graph style is ${keyword}`);
      setSelectedGraphType(keyword);
    }
  }

  // executes search functions for specific graph varibles
  const keywordSearch = () => {
    aggrigationKeywordList.forEach(searchAggrigation);
    eventKeywordList.forEach(searchEvent);
    eventPropertyKeywordList.forEach(searchBreakdownProperty);
    graphStyleKeywordList.forEach(searchGraphType);
  };

  // execute keyword searching on when querystring is saved as state
  useEffect(() => {
    keywordSearch();
  }, [searchQuery]);

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

  // Removes a FilterTag whose id is passed as argument
  const deleteFilterTag = (id) => {
    const newFilterTags = [...filterTags].filter(
      (filterTag) => filterTag.id !== id
    );
    setFilterTags(newFilterTags);
  };

  // Fetch possible value for a filter property from DB
  const fetchFilterPropertyValue = async (property) => {
    try {
      const response = await fetch(
        `${serverUrl}/filter-property-value?propertyName=${property}&writeKey=${userWriteKey}`,
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

  // Fetch possible value for a filter property from DB
  const fetchTrendsData = async (
    selectedEvent,
    eventCollectionType,
    filterTags,
    selectedGroupByProperty,
    selectedTimescale,
    selectedDateTimeRange,
    startDate,
    endDate,
    userWriteKey
  ) => {
    try {
      let filterString = JSON.stringify(filterTags);
      const response = await fetch(
        `${serverUrl}/trends?event=${selectedEvent}&aggregator=${eventCollectionType}&filters=${filterString}&groupBy=${selectedGroupByProperty}&timescale=${selectedTimescale}&dateTime=${selectedDateTimeRange}&startDate=${startDate}&endDate=${endDate}&writeKey=${userWriteKey}`,
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

  // Save a graph metrics into db to a specific dashboard
  const saveMetricsToDashboard = async (
    metricsName,
    selectedDashboard,
    eventCollectionType,
    selectedEvent,
    filterTags,
    selectedGroupByProperty,
    selectedTimescale,
    selectedGraphType,
    selectedDateTimeRange,
    startDate,
    endDate,
    userWriteKey
  ) => {
    try {
      let filterString = JSON.stringify(filterTags);
      await fetch(
        `${serverUrl}/save-metrics?metricsName=${metricsName}&dashboard=${selectedDashboard}&aggregator=${eventCollectionType}&event=${selectedEvent}&filters=${filterString}&timescale=${selectedTimescale}&chartType=${selectedGraphType}&groupBy=${selectedGroupByProperty}&dateTime=${selectedDateTimeRange}&startDate=${startDate}&endDate=${endDate}&writeKey=${userWriteKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

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
          style={{
            minWidth: "110px",
            margin: "10px 10px 10px 0px",
          }}
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

  // Fetch all avaliable event type from DB using APIs
  const getAllEventsName = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/events-name?writeKey=${userWriteKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const eventsName = await response.json();

      //Array of only event name for keyword searching
      const eventKeywordList = eventsName.map((eventName) => eventName.event);
      setEventKeywordList(eventKeywordList);

      //Mapping of events into selection option children
      const AvailableEventNameForSelect = eventsName.map((eventName) => (
        <Option value={eventName.event}>{eventName.event}</Option>
      ));
      setAvailableEventNameForSelect(AvailableEventNameForSelect);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch all avaliable event type from DB using APIs
  const getAllEventProperty = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/events-properties?writeKey=${userWriteKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const eventsProperties = await response.json();
      //Array of only event name for keyword searching
      const eventPropertyKeywordList = eventsProperties.map(
        (eventPropertyName) => eventPropertyName.properties
      );
      setEventPropertyKeywordList(eventPropertyKeywordList);

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

  // Fetch all avaliable dashboard names for select during save graph
  const getAllDashboardName = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/dashboards?writeKey=${userWriteKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dashbaords = await response.json();
      //console.log(dashbaords);

      const AvailableDashbaordForSelect = dashbaords.map((dashbaord) => (
        <Option value={dashbaord.dashboard_name}>
          {dashbaord.dashboard_name}
        </Option>
      ));
      setAvailableDashboardNameForSelect(AvailableDashbaordForSelect);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Create dashboard api call
  const createDashboard = async (
    dashboardName,
    description,
    email,
    writeKey
  ) => {
    try {
      await fetch(
        `${serverUrl}/create-dashboard?name=${dashboardName}&description=${description}&createdBy=${email}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  // Handle create dashboard button click
  const createNewDashboard = () => {
    if (
      dashboardName !== "" &&
      description !== "" &&
      email !== "" &&
      writeKey !== "" &&
      dashboardName !== undefined &&
      description !== undefined &&
      email !== undefined &&
      writeKey !== undefined
    ) {
      createDashboard(dashboardName, description, email, writeKey);
      openDashboardCreatedNotification("success");
      getAllDashboardName();
      setIsDashboardModalVisible(false);
    } else return;
  };

  //  fetched new graph data from db when selected variables chnages
  useEffect(() => {
    fetchTrendsData(
      selectedEvent,
      eventCollectionType,
      filterTags,
      selectedGroupByProperty,
      selectedTimescale,
      selectedDateTimeRange,
      startDate,
      endDate,
      userWriteKey
    );
  }, [
    selectedEvent,
    eventCollectionType,
    filterTags,
    selectedGroupByProperty,
    selectedTimescale,
    selectedDateTimeRange,
    startDate,
    endDate,
    userWriteKey,
  ]);

  // At every new render, call getAllEventsNames to load available events from db
  useEffect(() => {
    getAllEventsName();
  }, []);

  useEffect(() => {
    getAllEventProperty();
  }, []);

  useEffect(() => {
    getAllDashboardName();
  }, []);

  // fetch available filter value for a filter property passed,
  // at new render or if new filter property is selected
  useEffect(() => {
    fetchFilterPropertyValue(selectedFilterProperty);
  }, [selectedFilterProperty]);

  // Handle save metrics
  const handleSaveMetrics = () => {
    if (
      metricsName !== "" &&
      selectedDashboard !== "" &&
      writeKey !== "" &&
      metricsName !== undefined &&
      selectedDashboard !== undefined &&
      writeKey !== undefined
    ) {
      saveMetricsToDashboard(
        metricsName,
        selectedDashboard,
        eventCollectionType,
        selectedEvent,
        filterTags,
        selectedGroupByProperty,
        selectedTimescale,
        selectedGraphType,
        selectedDateTimeRange,
        startDate,
        endDate,
        userWriteKey
      );
      openSavedCardNotification("success", selectedDashboard);
      setIsCardModalVisible(false);
    } else return;
  };

  return (
    <div className="TrendsEditor">
      <Card
        className="trends-editor-card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          width: "30%",
          minHeight: "65vh",
          margin: "2% 0% 1% 0%",
          boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
        }}
      >
        <h1 className="trends-graph-properties-editor-headers">
          User performed event
          <Tooltip
            placement="rightTop"
            title="Select events that you want to see. eg: Pageview, Clicked Login etc."
          >
            <InfoCircleOutlined
              style={{ marginLeft: "10px", color: "#1890ff" }}
            />
          </Tooltip>
        </h1>

        <Select
          allowClear
          showSearch
          bordered={true}
          placeholder="Select Event ..."
          dropdownStyle={{ minWidth: "200px" }}
          style={{ width: "80%", margin: "0px 0px 20px 0px" }}
          onChange={handleEventNameSelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {availableEventNameForSelect}
        </Select>

        <h1 className="trends-graph-properties-editor-headers">
          Counted as
          <Tooltip
            placement="rightTop"
            title="Select events that you want to see. eg: Pageview, Clicked Login etc."
          >
            <InfoCircleOutlined
              style={{ marginLeft: "10px", color: "#1890ff" }}
            />
          </Tooltip>
        </h1>

        <Select
          bordered={true}
          defaultValue="Total"
          style={{
            width: "50%",
            margin: "0px 0px 10px 0px",
          }}
          onChange={handleEventCollectionType}
        >
          <Option value="Total">Total</Option>
          <Option value="Unique">Unique</Option>
        </Select>

        <Divider
          style={{
            marginBottom: "30px",
            marginTop: "30px",
            height: "1px",
          }}
        />

        <h1 className="trends-graph-properties-editor-headers">
          Where event has property
          <Tooltip
            placement="rightTop"
            title="Filter events with specific property and value eg: OS equal to MacOS, Browser not equal to chrome etc."
          >
            <InfoCircleOutlined
              style={{ marginLeft: "10px", color: "#1890ff" }}
            />
          </Tooltip>
        </h1>
        {/** 
        {filterTags
          ? filterTags.map((tag) => (
              <Tags
                Property={tag.Property}
                Operator={tag.Operator}
                Value={tag.Value}
              />
            ))
          : ""}
   */}

        {filterTags.map((filterTag, index) => (
          <Tags
            deleteFilterTag={deleteFilterTag}
            filterTag={filterTag}
            key={index}
          />
        ))}

        <Dropdown
          overlay={whereFilterMenu}
          visible={whereFilterDropdownVisible}
          placement="bottomLeft"
          arrow
        >
          <Button
            type="ghost"
            onClick={() => {
              setWhereFilterDropdownVisible(true);
            }}
            style={{ margin: "10px 0px 10px 0px" }}
          >
            Add Filter
          </Button>
        </Dropdown>

        <Divider
          style={{
            marginBottom: "30px",
            marginTop: "30px",
            height: "1px",
          }}
        />

        <h1 className="trends-graph-properties-editor-headers">
          Group events by property
          <Tooltip
            placement="rightTop"
            title="Group events by common property eg: os, browser, country etc."
          >
            <InfoCircleOutlined
              style={{ marginLeft: "10px", color: "#1890ff" }}
            />
          </Tooltip>
        </h1>
        <Select
          allowClear
          showSearch
          bordered={true}
          placeholder="Select group property"
          dropdownStyle={{ minWidth: "150px" }}
          style={{ margin: "0px 10px 10px 0px" }}
          onChange={handleGroupByPropertySelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {availableEventPropertyForSelect}
        </Select>
      </Card>
      <Card
        type="inner"
        style={{
          width: "68%",
          minHeight: "65vh",
          margin: "2% 0% 1% 2%",
          marginLeft: "auto",
          boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
        }}
        headStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        extra={[
          <Select
            bordered={false}
            defaultValue="Daily"
            dropdownStyle={{ minWidth: "100px" }}
            style={{ marginRight: "5px", fontWeight: "600" }}
            onChange={handleGraphTimeScaleSelectChange}
          >
            <Option value="minute">Minute</Option>
            <Option value="hour">Hourly</Option>
            <Option value="day">Daily</Option>
            <Option value="week">Weekly</Option>
            <Option value="month">Monthly</Option>
          </Select>,
          <Select
            bordered={false}
            defaultValue="Linear"
            dropdownStyle={{
              minWidth: "100px",
            }}
            style={{ marginRight: "5px", fontWeight: "600" }}
            onChange={handleGraphTypeSelectChange}
          >
            <Option value="Linear">{<LineChartOutlined />} Linear</Option>
            <Option value="Bar">{<BarChartOutlined />} Bar</Option>
            <Option value="Table">{<TableOutlined />} Table</Option>
            <Option value="Pie">{<PieChartOutlined />} Pie</Option>
            <Option value="Count">{<FieldBinaryOutlined />} Count</Option>
          </Select>,
          <Dropdown
            overlay={customDateRangeMenu}
            visible={DateRangeFilterDropdownVisible}
            placement="bottomLeft"
            arrow
          >
            <Select
              bordered={false}
              value={displayDateTimeRange}
              dropdownStyle={{
                minWidth: "200px",
              }}
              style={{
                marginRight: "20px",
                fontWeight: "600",
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
          </Dropdown>,
          <Button
            size="default"
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => {
              setIsCardModalVisible(true);
            }}
          >
            <CheckOutlined />
            Save
          </Button>,
        ]}
      >
        {/**   
        <AreaGraph data={graphData} />
        <LineGraph data={graphData} timescale={selectedTimescale} />
        */}

        <div style={{ margin: "4vh 0 0 0" }}>
          {selectedGroupByProperty === "" ? (
            selectedGraphType === "Linear" ? (
              <LineCharts jsonData={graphData} />
            ) : selectedGraphType === "Table" ? (
              <TableChart jsonData={graphData} groupBy={"Time"} />
            ) : selectedGraphType === "Bar" ? (
              <BarChart jsonData={graphData} groupBy={"Time"} />
            ) : selectedGraphType === "Pie" ? (
              <PieChart jsonData={graphData} groupBy={"Time"} />
            ) : selectedGraphType === "Count" ? (
              <CountChart jsonData={graphData} groupBy={"Time"} />
            ) : null
          ) : selectedGraphType === "Table" ? (
            <TableChart
              jsonData={graphData}
              groupBy={selectedGroupByProperty}
            />
          ) : selectedGraphType === "Bar" ? (
            <BarChart jsonData={graphData} groupBy={selectedGroupByProperty} />
          ) : selectedGraphType === "Pie" ? (
            <PieChart jsonData={graphData} groupBy={selectedGroupByProperty} />
          ) : null}
        </div>
      </Card>

      <Modal
        title="Save graph to dashboard"
        visible={isCardModalVisble}
        onOk={handleCardModalOk}
        onCancel={handleCardModalCancel}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setIsCardModalVisible(false);
            }}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSaveMetrics}>
            Save to dashboard
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Graph Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter graph name!",
              },
            ]}
          >
            <Input onChange={handleGraphNameInputChange} />
          </Form.Item>
          <Form.Item
            label="Dashboard"
            name="description"
            rules={[
              {
                required: false,
                message: "Please enter a description!",
              },
            ]}
          >
            <Select
              allowClear
              showSearch
              value={selectedDashboard}
              bordered={true}
              placeholder="Select Dashbaord"
              dropdownStyle={{ minWidth: "200px" }}
              onChange={handleDashboardNameSelect}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {availableDashboardNameForSelect}
              <Option value="+ Add New Dashboard">+ Add New Dashboard</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="New Dashboard"
        visible={isDashboardModalVisible}
        onOk={handleDashboardModalOk}
        onCancel={handleDashboardModalCancel}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setIsDashboardModalVisible(false);
            }}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={createNewDashboard}>
            Create
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter dashboard name!",
              },
            ]}
          >
            <Input onChange={handleDashboardNameInputChange} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: false,
                message: "Please enter a description!",
              },
            ]}
          >
            <Input onChange={handleDescriptionInputChange} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
