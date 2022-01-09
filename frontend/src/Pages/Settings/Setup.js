import React, { useState, useEffect } from "react";
import { Divider, Typography, Input, Table, Space } from "antd";

import { LinkOutlined } from "@ant-design/icons";
import { Trash2 } from "react-feather";
import "./Settings.css"

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Switch } from 'antd';
import axios from "axios";
import { connect } from "react-redux";

import usePluginStatus from "../../api/hooks/usePluginStatus";
import { savePlugin } from "../../api/network/savePlugin";
import useAllowedUrl from "../../api/hooks/useAllowedUrl";

function Setup(props) {
  const { Paragraph } = Typography;
  const { Search } = Input;

  //authtoken and writekey
  const [token, ] = useState(props?.writeKeyModel?.token);
  const [writeKey, ] = useState(props?.writeKeyModel?.user);

  var apiServer = process.env.REACT_APP_EVENT_COLLECTOR;

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [, setAllowedWebsiteList] = useState([]);
  const [dbCreated, setDbCreated] = useState(false);

  const [isSessionChecked, setSessionChecked] = useState(false);

  const saveFusionUserId = () => {
    try {
        axios.get(`${serverUrl}/save-userId?userId=${writeKey}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
          setDbCreated(true)
        })
      } catch (error) {
        console.log(error.message);
      }
  };

  useEffect(() => {
    if(writeKey && token) {
        saveFusionUserId();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [writeKey, token])

  //plugin status
  const statusD = usePluginStatus(writeKey, dbCreated);

  //allowed Urls
  const allowedUrl = useAllowedUrl(writeKey, dbCreated);

  var trackingCode = `<!-- Fusion Analytics Tracking Script-->
  <script src="https://app.fusionhq.co/session-lib.js"></script>
  <script> 
    (function () { 
      var fusionScript = document.createElement("SCRIPT");
      fusionScript.src = "https://app.fusionhq.co/array.js"; 
      fusionScript.type = "text/javascript"; 
      document.getElementsByTagName("HEAD")[0].appendChild(fusionScript);
      document.onreadystatechange = function () { 
        if (document.readyState === "complete") {
            fusion.init("${writeKey}", "${apiServer}", false, false);
          }};
      })();
  </script>`;

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
    if(writeKey && token && statusD?.data) {
      setSessionChecked(statusD?.data?.is_active)
    }
    if(token) {
      sessionStorage.setItem('JWT', token);
    }
  },[writeKey, token, statusD]);

  function changeSessionStatus(checked) {
    savePlugin(writeKey, checked);
    setSessionChecked(!isSessionChecked);
  }

  return (
    <div className="Setup">
      <div
        style={{
          width: "100%",
          margin: "0 0 0 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "left",
          textAlign: "left",
        }}
      >
        <h1>Add tracking snippet</h1>
        To setup event tracking, paste the below code snippet just before end of
        head tag on your website. It will only capture pageview & pageleave by
        default. To collect button/link click, input/form submission, change the
        word "false" to "true" in the below code snippet
        <Paragraph
          copyable={{ text: trackingCode }}
          style={{
            margin: "0 0 0 95%",
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

      <Divider />

      <h1>Autherization</h1>
      <div
        style={{
          width: "90%",
          margin: "0 0 0 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        Add the URL of your website. Only the websites you add below will be
        able to send tracking data to your fusion account using above snippet
        <Search
          placeholder="Allowed URL (eg: piedpiper.com)"
          allowClear
          enterButton="Add URL"
          size="large"
          onSearch={saveProjectURL}
          style={{ margin: "10px 0 20px 0" }}
          prefix={<LinkOutlined />}
        />
        <Table
          style={{ width: "100%", margin: "0 0 20px 0" }}
          dataSource={allowedUrl?.data}
          columns={TableColumns}
          size="small"
          pagination={false}
        />
      </div>

      <Divider />

      <h1>Plugins</h1>
      Play with different Plugins offered, Switch on/off directly plugins from here.
      <div style={{display: 'flex', gap: 20, marginTop: 20, alignItems: 'center'}}>
        <h3 style={{marginTop: 5}}>Session Recording</h3>
        <Switch checked={isSessionChecked} onChange={changeSessionStatus} />
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

export default connect(mapState, mapDispatch)(Setup);
