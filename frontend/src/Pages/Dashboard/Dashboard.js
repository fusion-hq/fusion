/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect, useContext } from "react";
import "./Dashboard.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Form, Input, Table, Button, Space, Modal } from "antd";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import { WriteKeyContext } from "../../Context/WriteKeyContext";
import { SetupWizardContext } from "../../Context/SetupWizardContext";
import { Link } from "react-router-dom";
import { Trash2 } from "react-feather";
import { useAuth0 } from "@auth0/auth0-react";
import SetupWizard from "../../Components/SetupWizard/SetupWizard";

function Dashboard() {
  const [accessToken,] = useContext(AccessTokenContext);
  const [writeKey,] = useContext(WriteKeyContext);
  const [, setSetupWizardVisible] = useContext(SetupWizardContext);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const token = accessToken;
  const [dashboards, setDashboards] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dashboardName, setDashboardName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const { user } = useAuth0();
  const { email } = user;
  const { confirm } = Modal;

  function showDeleteDashboardConfirm(record) {
    confirm({
      title: "Delete this dashboard?",
      icon: <ExclamationCircleOutlined />,
      content: "You will loose all the saved metrics of this dashboard",
      onOk() {
        //console.log("OK");
        handleDeleteDashboard(record);
      },
      onCancel() {
        //console.log("Cancel");
      },
    });
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleNameInputChange = (event) => {
    event.preventDefault();
    setDashboardName(event.target.value);
  };
  const handleDescriptionInputChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const TableColumns = [
    {
      title: "Dashboard",
      dataIndex: "dashboard_name",
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/dashboard/" + text}>
            {text}
            {record.name}
          </Link>
        </Space>
      ),
    },
    {
      title: "Description",
      dataIndex: "dashboard_description",
    },
    {
      title: "Created By",
      dataIndex: "created_by",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Space size="middle">
          <button
            className="dashboard-delete-button"
            onClick={() => {
              showDeleteDashboardConfirm(record);
            }}
          >
            <Trash2 size="15px" color="#d3461b" />
          </button>
        </Space>
      ),
    },
  ];

  // Fetch possible value for a filter property from DB
  const fetchAllDashboards = async (writeKey) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${serverUrl}/dashboards?writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dashboardList = await response.json();
      setDashboards(dashboardList);
      setLoading(false);
      //console.log(dashboardList);
      if (dashboardList === "") {
        setSetupWizardVisible(true);
      }
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
      const response = await fetch(
        `${serverUrl}/create-dashboard?name=${dashboardName}&description=${description}&createdBy=${email}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dashboardList = await response.json();
      setDashboards(dashboardList);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Create dashboard api call
  const deleteDashboard = async (
    dashboardName,
    description,
    email,
    writeKey
  ) => {
    try {
      const response = await fetch(
        `${serverUrl}/delete-dashboard?name=${dashboardName}&description=${description}&createdBy=${email}&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dashboardList = await response.json();
      setDashboards(dashboardList);
      if (dashboardList === "") {
        setSetupWizardVisible(true);
      }
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
      setIsModalVisible(false);
    } else return;
  };

  const handleDeleteDashboard = (record) => {
    const { dashboard_name, dashboard_description, created_by } = record;
    deleteDashboard(
      dashboard_name,
      dashboard_description,
      created_by,
      writeKey
    );
  };

  useEffect(() => {
    fetchAllDashboards(writeKey);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Dashboard">
      <div className="main-container">
        <Sidenav />
        <div className="content-container">
          <div className="content">
            <div className="header">
              <h1>Dashboards</h1>
              <p>Pin custom graphs to track KPI</p>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginLeft: "auto", marginBottom: "10px" }}
                onClick={() => {
                  setIsModalVisible(true);
                }}
              >
                Add Dashboard
              </Button>
            </div>
            {/** Dashboard list table */}

            <Table
              className="dashboard-table"
              loading={loading}
              dataSource={dashboards}
              columns={TableColumns}
              size="small"
              pagination={false}
            />
            <Modal
              title="New Dashboard"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button
                  key="back"
                  onClick={() => {
                    setIsModalVisible(false);
                  }}
                >
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  onClick={createNewDashboard}
                >
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                  <Input onChange={handleNameInputChange} />
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

            <SetupWizard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
