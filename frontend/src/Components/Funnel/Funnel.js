/**
 * This the component is used in Insights.js and allows to build trend graph
 */

 import React, { useState, useEffect, useContext } from "react";
 import "./Funnel.css";
 import {
   Card,
   Button,
   Select,
   Menu,
   Dropdown,
   Tooltip,
   DatePicker,
   Spin,
   message,
   Tag
 } from "antd";
 import { AccessTokenContext } from "../../Context/AccessTokenContext";
 import { WriteKeyContext } from "../../Context/WriteKeyContext";
 // import FunnelStep from "./FunnelStep";
 import { InfoCircleOutlined } from "@ant-design/icons";
 import FunnelChart from "../FunnelChart/FunnelChart";
 import { Trash2, Filter } from "react-feather";
 
 //import FunnelChart from "../FunnelSource/FunnelChart";
 
 export default function Funnel() {
   const [accessToken] = useContext(AccessTokenContext);
   const [writeKey] = useContext(WriteKeyContext);
   const [loading, setLoading] = useState(false);
 
   const [availableEventNameForSelect, setAvailableEventNameForSelect] = useState([]);
   const [DateRangeFilterDropdownVisible, setDateRangeFilterDropdownVisible] = useState(false);
   const serverUrl = process.env.REACT_APP_SERVER_URL;
   const token = accessToken;
   const userWriteKey = writeKey;
 
   //used for funnels
   const [funnelSteps, setFunnelSteps] = useState([{ id: 0 }]);
   const [eventList, setEventList] = useState([]);
 
   //States used by graph card
   const [selectedDateTimeRange, setSelectedDateTimeRange] = useState("Today");
   const [displayDateTimeRange, setDisplayDateTimeRange] = useState("Today");
 
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
 
   // Real fetched data for graph
   const [graphData, setGraphData] = useState([]);
 
   // used by WHERE property popup state auto visibility
//    const [filterTags, ] = useState([]);
 
   const [whereFilterDropdownVisible, setWhereFilterDropdownVisible] = useState(-1);
 
   const [availableEventPropertyForSelect, setAvailableEventPropertyForSelect] = useState([]);
 
   const [selectedFilterProperty, setSelectedFilterProperty] = useState("");
   const [selectedFilterOperator, setSelectedFilterOperator] = useState("");
   const [selectedFilterValue, setSelectedFilterValue] = useState("");
   const [availablePropertyValueForSelect, setAvailablePropertyValueForSelect] = useState([]);

   //componnets from antd
   const { Option } = Select;
   const { RangePicker } = DatePicker;
 
   // Selector handlers used for WHERE section
   function handleFilterPropertySelect(value) {
     if (value !== undefined) {
       setSelectedFilterProperty(value);
       fetchFilterPropertyValue();
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
 
   //Saves values of filter input fields in filterTags state
   const saveFilter = (parent_id) => {
     // check if filter selecttor are not empty and then save the filter tag
        if (
        selectedFilterProperty !== "" &&
        selectedFilterOperator !== "" &&
        selectedFilterValue !== ""
        ) {
            const newEventList = eventList.map((event) => {
                if(event.id === parent_id) {
                    event.filters = [...event.filters, {
                        id: event.filters.length > 0 ? event.filters[event.filters.length - 1].id + 1: 0,
                        Property: selectedFilterProperty,
                        Operator: selectedFilterOperator,
                        Value: selectedFilterValue,
                    }]
                }
                return event
            })
            setEventList(newEventList);
            setWhereFilterDropdownVisible(-1);
        } else {
            message.warning("Select all fields !");
        }
    };
 
    // Removes a FilterTag whose id is passed as argument
//     const deleteFilterTag = (filterId, funnelId) => {
//         console.log(filterId, funnelId);
//         const funnel = eventList.filter((event) => event.id === funnelId)

//         console.log(funnel[0])

//         const newFilter = funnel[0].filters.filter((filter) => filter.id !== filterId);

//         console.log(newFilter);
//    };
 
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
   function handleEventNameSelect(value, index) {
     let changed = 0
     const newEventList = eventList.map((item) => {
       if(item.id === index) {
         changed = 1;
         return {id: item.id, event: `${value}`, filters: []};
       } else {
         return item;
       }
     })
     if(changed) {
       setEventList([...newEventList])
     }
     else {
       let newFunnelEvent = {id: index, event: `${value}`, filters: []};
       setEventList([...eventList, newFunnelEvent]);
     }
   }
 
   // handles change in date range picker selector
   function handleDatePickerValueChange(date, dateString) {
     setStartDate(dateString[0]);
     setEndDate(dateString[1]);
   }
 
   //Saves values of filter input fields in filterTags state
   const addFunnelStep = () => {
     // check if filter selecttor are not empty and then save the filter tag
     setFunnelSteps([
       ...funnelSteps,
       {
         id: funnelSteps[funnelSteps.length - 1].id + 1,
       },
     ]);
   };
   // Removes a FilterTag whose id is passed as argument
   const deleteFunnelStep = (_, id) => {
 
     if(funnelSteps.length > 1) {
       const newFunnelSteps = funnelSteps.filter(
         (funnelStep) => funnelStep.id !== id
       );
   
       const newEventList = eventList.filter(
         (events) => events.id !== id
       );
   
       setFunnelSteps(newFunnelSteps);
       setEventList(newEventList);
     }
   };
 
   // Fetch possible value for a filter property from DB
   const fetchFunnelData = async (
     eventList,
     selectedDateTimeRange,
     startDate,
     endDate,
     userWriteKey
   ) => {
     setLoading(true);
     let funnelStepsString = JSON.stringify(eventList);
     try {
       const response = await fetch(
         `${serverUrl}/funnel?events=${funnelStepsString}&dateTime=${selectedDateTimeRange}&startDate=${startDate}&endDate=${endDate}&writeKey=${userWriteKey}`,
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );
       const funnelData = await response.json();
       setGraphData(funnelData);
       setLoading(false);
     } catch (error) {
       console.log(error.message);
     }
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
 
   useEffect(() => {
     getAllEventProperty();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
 
   // fetch available filter value for a filter property passed,
   // at new render or if new filter property is selected
   useEffect(() => {
     fetchFilterPropertyValue(selectedFilterProperty);
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedFilterProperty]);
 
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
 
       //Mapping of events into selection option children
       const AvailableEventNameForSelect = eventsName.map((eventName) => (
         <Option value={eventName.event}>{eventName.event}</Option>
       ));
       setAvailableEventNameForSelect(AvailableEventNameForSelect);
     } catch (error) {
       console.log(error.message);
     }
   };
 
   //  fetched new graph data from db when selected variables chnages
   useEffect(() => {
    fetchFunnelData(
       eventList,
       selectedDateTimeRange,
       startDate,
       endDate,
       userWriteKey
     );
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [
     eventList,
     selectedDateTimeRange,
     startDate,
     endDate,
     userWriteKey,
     funnelSteps,
   ]);
 
   // At every new render, call getAllEventsNames to load available events from db
   useEffect(() => {
     getAllEventsName();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const displayTags = (id) => {
        const Event = eventList.map(event => {
            if(event.id === id) {
                return event
            } else {
                return null
            }
        })

        const newEvent = Event.filter((item) => item!==null);
        return newEvent[0]?.filters;
    }

   //------------Filter Menu----------------

    const whereFilterMenu = (id) => {
        return (
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
                    >
                        {availablePropertyValueForSelect}
                    </Select>
                </span>

                <span style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button
                        style={{ margin: "10px 10px 0px 0px" }}
                        onClick={() => saveFilter(id)}
                        type="primary"
                    >
                        Add
                    </Button>
                    <Button
                        style={{ margin: "10px 0px 0px 0px" }}
                        onClick={() => {
                            setWhereFilterDropdownVisible(-1);
                        }}
                        type="primary"
                        ghost
                    >
                        Done
                    </Button>
                </span>
            </Menu>
        )
    };

   //---------------------------------------------
 
   return (
     <div className="Funnel">
       <Card
         className="funnel-card"
         style={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "left",
           alignItems: "left",
           width: "30%",
           height: "66vh",
           margin: "2% 0 0 0",
           boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
           overflow: 'scroll'
         }}
       >
         <h1 className="funnel-graph-properties-editor-headers">
           Actions performed in this order
           <Tooltip
             placement="rightTop"
             title="Select events performed in specific order eg: pageview -> login -> add to cart"
           >
             <InfoCircleOutlined
               style={{ marginLeft: "10px", color: "#1890ff" }}
             />
           </Tooltip>
         </h1>
 
         {funnelSteps.map((funnelStep, index) => (
            <div key={funnelStep.id}>
                <div
                    key={funnelStep.id}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    }}
                >
                    <Select
                        showSearch
                        bordered={true}
                        placeholder="Select Event ..."
                        dropdownStyle={{ minWidth: "200px" }}
                        style={{ width: "80%", margin: "0px 0px 0px 0px" }}
                        onChange={(e) => {
                            handleEventNameSelect(e, funnelStep.id);
                        }}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                        >
                        {availableEventNameForSelect}
                    </Select>
                    {index > 0 ?<button
                    onClick={(e) => deleteFunnelStep(e, funnelStep.id)}
                    style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        margin: "0px 0px 0px 10px",
                        color: "#cccccc",
                    }}
                    >
                    <Trash2 size="18px" color="#1890ff" />
                    </button>: null}

                    <Dropdown
                        key={funnelStep.id}
                        overlay={() => whereFilterMenu(funnelStep.id)}
                        visible={funnelStep.id === whereFilterDropdownVisible}
                        placement="bottomLeft"
                        arrow
                        >
                        <button
                            onClick={() => {
                                setWhereFilterDropdownVisible(funnelStep.id);
                            }}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                margin: "0px 0px 0px 10px",
                                color: "#cccccc",
                            }}
                        >
                            <Filter size="18px" color="#1890ff" />
                        </button>
                    </Dropdown>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        displayTags(funnelStep.id) ? displayTags(funnelStep.id).map((filter, _) => (
                            <Tag key={filter.id} style={{marginBottom: 10}}>{filter?.Property} {filter?.Operator} {filter?.Value}</Tag>
                        )) : null
                    }
                </div>
             </div>
           
         ))}
 
         <Button
           type="ghost"
           onClick={addFunnelStep}
           style={{ margin: "10px 0px 10px 0px" }}
         >
           Add funnel step
         </Button>
       </Card>
       <Card
         type="inner"
         style={{
           width: "68%",
           minHeight: "66vh",
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
           </Dropdown>,
         ]}
       >
         {/**   
         <AreaGraph data={graphData} />
         <LineGraph data={graphData} timescale={selectedTimescale} />
         */}
 
         <div className="funnel-container">
           {loading ? (
             <Spin size="large" style={{ margin: "15vh 0 0 25vw" }} />
           ) : (
             <FunnelChart jsonData={graphData} graphType={"funnel"} />
             // <FunnelChart funnelContainer={"funnel-container"} />
           )}
         </div>
       </Card>
     </div>
   );
 }