/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect } from "react";
import "./Recording.css";
import { useHistory } from "react-router-dom";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Card, Table, Button } from "antd";
import { useParams } from "react-router-dom";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import Loading from "../../Components/Loading/Loading";
import { connect } from "react-redux";
import { deleteRecording } from "../../api/network/deleteRecording";
import useRecordingData from "../../api/hooks/useRecordingData";

function Recording(props) {
  const history = useHistory();

  const { id } = useParams();
  const [writeKey, ] = useState(props?.writeKeyModel?.user);

  const [, setRecordingProfile] = useState({});
  const [, setRecordingIds] = useState([]);
  const [recordingProperties, setRecordingProperties] = useState([]);

  const recordingData = useRecordingData(id, writeKey);
  console.log(recordingData?.data);

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

  // transform fetched data
  const getRecordingData = () => {
    try {
        const recordingDataAPI = recordingData?.data;

        if (
          recordingDataAPI !== null &&
          recordingDataAPI !== undefined &&
          recordingDataAPI !== []
        ) {
          setRecordingEvents(recordingDataAPI[0].recording);
        }

        //console.log(userProfileData[0].properties);

        setRecordingProfile(recordingDataAPI);
        setRecordingIds(recordingDataAPI.user_ids);

        //format userProfileData.properties object to array to render antd Table
        let profilePropertiesDataForTable = [],
          propertiesObject = recordingDataAPI[0].properties;
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
        setRecordingProperties(profilePropertiesDataForTable);
      
    } catch (error) {
      console.error(error.message);
    }
  };

  //transform data on change of recording data
  useEffect(() => {
    getRecordingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordingData]);

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


  const deleteRecordingInstance = async () => {
    await deleteRecording(id, writeKey).then((res) => {
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
                <Button onClick={deleteRecordingInstance}>Delete</Button>
              </div>

              {/** session replayer */}
              {/* <Player />  */}
              {
                recordingEvents.length === 0 ? (
                  !recordingData ? <Loading /> : (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <img style={{width: 400, height: 400}} src="https://raw.githubusercontent.com/fusion-hq/fusion/main/doc/no-data.png" alt="no-data"/>
                      <p style={{fontSize: 28}}>No Data</p>
                    </div>
                  )
                ) : (
                  <div
                    id="wrapper"
                    style={{ marginTop: "0px", marginLeft: "0px" }}
                  />
                )
              }
              
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
                dataSource={recordingProperties}
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

const mapState = (state) => ({
  writeKeyModel: state.writeKeyModel,
});

const mapDispatch = (dispatch) => ({
  setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});

export default connect(mapState, mapDispatch)(Recording);
