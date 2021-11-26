/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect, useContext } from "react";
import "./Recording.css";
import { useHistory } from "react-router-dom";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Card, Table, Button } from "antd";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import { WriteKeyContext } from "../../Context/WriteKeyContext";
import { useParams } from "react-router-dom";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import axios from "axios";

function Recording() {
  const history = useHistory();

  const { id } = useParams();
  const [accessToken] = useContext(AccessTokenContext);
  const [writeKey] = useContext(WriteKeyContext);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const [, setRecordingProfile] = useState({});
  const [, setRecordingIds] = useState([]);
  const [userProfileProperties, setRecordingProfileProperties] = useState([]);

  //session recording states
  const [recordingEvents, setRecordingEvents] = useState([]);

  //loading state
  //const [loading, setLoading] = useState(true);

  // used in table for show all user properties
  const profilePropertyTableColumn = [
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
      width: "50%",
      ellipsis: true,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "50%",
      ellipsis: true,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    //console.log("params", pagination, filters, sorter, extra);
  }

  // Fetch users profile data
  const getRecordingData = async (id, writeKey) => {
    try {
      const token = accessToken;

      if (writeKey.length > 0) {
        const response = await fetch(
          `${serverUrl}/getRecordingData?sessionId=${id}&writeKey=${writeKey}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userProfileData = await response.json();

        if (
          userProfileData !== null &&
          userProfileData !== undefined &&
          userProfileData !== []
        ) {
          setRecordingEvents(userProfileData[0].recording);
        }

        //console.log(userProfileData[0].properties);

        setRecordingProfile(userProfileData);
        setRecordingIds(userProfileData.user_ids);

        //format userProfileData.properties object to array to render antd Table
        let profilePropertiesDataForTable = [],
          propertiesObject = userProfileData[0].properties;
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
        setRecordingProfileProperties(profilePropertiesDataForTable);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getRecordingData(id, writeKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, writeKey]);

  useEffect(() => {
    if (recordingEvents.length > 0) {
      new rrwebPlayer({
        target: document.getElementById("wrapper"),
        data: {
          events: recordingEvents,
          autoPlay: true,
          width: 840,
          height: 500,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordingEvents]);


  const deleteRecording = async () => {
    const token = accessToken;

    axios.get(`${serverUrl}/deleteRecording?sessionId=${id}&writeKey=${writeKey}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      history.push('/session')
    })
  }

  return (
    <div className="Recording" id="Recording">
      <div className="main-container">
        <Sidenav subPath={id} />
        <div className="content-container">
          <div className="content">
            <div className="event-section">
              <div className="header">
                <div>
                  <h1>Recording</h1>
                  <p>See session recording of a specific user</p>
                </div>
                <Button onClick={deleteRecording}>Delete</Button>
              </div>

              {/** session replayer */}
              {/* <Player />  */}
              <div
                id="wrapper"
                style={{ marginTop: "0px", marginLeft: "0px" }}
              />
              {/* {recordingEvents!==null && recordingEvents!==undefined && recordingEvents!==[] ? <RRWEBPlayer events={recordingEvents} />: null} */}
            </div>

            <Card
              className="trends-editor-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "left",
                width: "30%",
                minHeight: "90vh",
                margin: "0% 0% 1% 1%",
                boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
              }}
            >
              <Table
                style={{ width: "100%" }}
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
export default Recording;
