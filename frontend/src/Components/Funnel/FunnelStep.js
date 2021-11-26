import React from "react";
import { Button, Select, Menu, Dropdown } from "antd";
import { Trash2, Filter } from "react-feather";

export default function FunnelStep({
  funnelStep,
  deleteFunnelStep,
  handleEventNameSelect,
  availableEventNameForSelect,
  handleFilterPropertySelect,
  availableEventPropertyForSelect,
  handleFilterOperatorSelect,
  handleFilterValueSelect,
  availablePropertyValueForSelect,
  saveFilter,
  setWhereFilterDropdownVisible,
  whereFilterDropdownVisible,
}) {
  //componnets from antd
  const { Option } = Select;

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

  return (
    <div className="FunnelStep">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
          onChange={handleEventNameSelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {availableEventNameForSelect}
        </Select>
        <button
          onClick={() => deleteFunnelStep(funnelStep.id)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            margin: "0px 0px 0px 10px",
            color: "#cccccc",
          }}
        >
          <Trash2 size="18px" color="#1890ff" />
        </button>
        <Dropdown
          overlay={whereFilterMenu}
          visible={whereFilterDropdownVisible}
          placement="bottomLeft"
          arrow
        >
          <button
            onClick={() => {
              setWhereFilterDropdownVisible(true);
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
    </div>
  );
}