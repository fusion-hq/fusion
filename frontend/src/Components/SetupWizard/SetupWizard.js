/**
 * This the component is used in Insights.js and allows to build trend graph
 */

import React, { useState, useEffect, useContext } from "react";
import {
  Steps,
  Button,
  message,
  Modal,
  Typography,
  Input,
  Table,
  Space,
} from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Trash2 } from "react-feather";
import { SetupWizardContext } from "../../Context/SetupWizardContext";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { connect } from "react-redux";

function SetupWizard(props) {

  //authtoken and writekey
  const [token, ] = useState(props?.writeKeyModel?.token);
  const [writeKey, ] = useState(props?.writeKeyModel?.user);

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [setupWizardVisible, setSetupWizardVisible] =
    useContext(SetupWizardContext);
  const [current, setCurrent] = useState(0);
  const [allowedWebsiteList, setAllowedWebsiteList] = useState([]);

  const { Paragraph } = Typography;
  const { Step } = Steps;
  const { Search } = Input;

  var apiServer = "https://service.fusionhq.co";

  var trackingCode = `<!-- Fusion Analytics Tracking Script--><script> (function () { var fusionScript = document.createElement("SCRIPT");
fusionScript.src = "https://app.fusionhq.co/array.js"; fusionScript.type = "text/javascript"; document.getElementsByTagName("HEAD")[0].appendChild(fusionScript);
document.onreadystatechange = function () { if (document.readyState === "complete") {
fusion.init("${writeKey}", "${apiServer}", false);}};})();</script>`;

  const handleSetupModalOk = () => {
    setSetupWizardVisible(false);
  };
  const handleSetupModalCancel = () => {
    setSetupWizardVisible(false);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  const TableColumns = [
    {
      title: "Allowed URL",
      dataIndex: "website_name",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Space size="middle">
          <button
            className="dashboard-delete-button"
            style={{
              outline: "none",
              border: "transparent",
              background: "transparent",
              color: "#d3461b",
              padding: "none",
              margin: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              handleAllowedUrlDelete(record);
            }}
          >
            <Trash2 size="15px" color="#d3461b" />
          </button>
        </Space>
      ),
    },
  ];

  // Create dashboard api call
  const addAllowedUrl = async (writeKey, websiteUrl) => {
    try {
      const response = await fetch(
        `${serverUrl}/add-allowed-website?writeKey=${writeKey}&websiteName=${websiteUrl}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const allowedWebsites = await response.json();
      setAllowedWebsiteList(allowedWebsites);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Create dashboard api call
  const getAllowedUrl = async (writeKey) => {
    try {
      const response = await fetch(
        `${serverUrl}/allowed-websites?writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const allowedWebsites = await response.json();
      setAllowedWebsiteList(allowedWebsites);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Create dashboard api call
  const deleteAllowedUrl = async (writeKey, websiteUrl) => {
    try {
      const response = await fetch(
        `${serverUrl}/delete-allowed-website?writeKey=${writeKey}&websiteName=${websiteUrl}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const allowedWebsites = await response.json();
      setAllowedWebsiteList(allowedWebsites);
    } catch (error) {
      console.log(error.message);
    }
  };

  const saveProjectURL = (value) => {
    console.log("adding URL " + value);
    addAllowedUrl(writeKey, value);
  };

  const handleAllowedUrlDelete = (record) => {
    const { website_name } = record;
    deleteAllowedUrl(writeKey, website_name);
  };

  useEffect(() => {
    getAllowedUrl(writeKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="SetupWizard">
      <Modal
        title="Setup New Project"
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={setupWizardVisible}
        onOk={handleSetupModalOk}
        onCancel={handleSetupModalCancel}
        footer={null}
        /** 
        footer={[
          <Button
            key="back"
            onClick={() => {
              setSetupWizardVisible(false);
            }}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Create
          </Button>,
        ]}
        */
      >
        <Steps current={current}>
          <Step key={1} />
          <Step key={2} />
          <Step key={3} />
        </Steps>
        <div
          className="steps-content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px 0 0 0",
            width: "100%",
          }}
        >
          {current === 0 ? (
            <div
              style={{
                width: "100%",
                margin: "0 0 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p>
                To setup event tracking, paste the below code snippet just
                before end of head tag on your website. It will only capture
                pageview & pageleave by default. To collect button/link click,
                input/form submission, change the word false to true in the
                below code
              </p>
              <Paragraph
                copyable={{ text: trackingCode }}
                style={{
                  margin: "0 0 0 80%",
                }}
              >
                Copy
              </Paragraph>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                  width: "100%",
                  margin: "10px 0 10px 0",
                }}
              >
                <SyntaxHighlighter language="javascript" style={monokai}>
                  {trackingCode}
                </SyntaxHighlighter>
              </div>
            </div>
          ) : current === 1 ? (
            <div
              style={{
                width: "80%",
                margin: "0 0 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>
                Add the URL of your website. Only the websites you add below
                will be able to send tracking data to your fusion account
              </p>
              <Search
                placeholder="Allowed URL"
                allowClear
                enterButton="Add URL"
                size="large"
                onSearch={saveProjectURL}
                style={{ margin: "10px 0 20px 0" }}
                prefix={<LinkOutlined />}
              />

              <Table
                style={{ width: "100%", margin: "0 0 20px 0" }}
                dataSource={allowedWebsiteList}
                columns={TableColumns}
                size="small"
                pagination={{ defaultPageSize: 4 }}
              />
            </div>
          ) : current === 2 ? (
            <div
              style={{
                width: "80%",
                margin: "10px 0 50px 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p>
                Great 🎉 Now you should see events coming from your webiste on
                events page. Refer docs to learn more about Fusion 🚀 . After
                this step go to dashboard page & create a dashboard to avoid
                seeing this popup again !
              </p>
            </div>
          ) : null}
        </div>

        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                message.success("Setup complete!");
                setSetupWizardVisible(false);
              }}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Modal>
    </div>
  );
}

const mapState = (state) => ({
  writeKeyModel: state.writeKeyModel,
});

const mapDispatch = (dispatch) => ({
  setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});

export default connect(mapState, mapDispatch)(SetupWizard);