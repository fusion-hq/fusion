/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./Action.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {
  Avatar,
  Badge,
  Menu,
  Empty,
  Spin,
  Radio,
  Divider,
  Button,
  Skeleton,
  Popconfirm,
  message,
} from "antd";
import {
  UserOutlined,
  SmileOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  LinkOutlined,
  CompassOutlined,
  DesktopOutlined
} from "@ant-design/icons";
import { Trash2 } from "react-feather";

import { WriteKeyContext } from "../../Context/WriteKeyContext";
import { AccessTokenContext } from "../../Context/AccessTokenContext";

import { useParams } from "react-router-dom";
import moment from "moment";

var client;

function Action() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const chatServerUrl = "https://fusion-chat-backend.herokuapp.com";
  const [socketConnected, setSocketConnected] = useState(false);

  const [writeKey, ] = useContext(WriteKeyContext);
  const [accessToken, ] = useContext(AccessTokenContext);

  const [chats, setChats] = useState([]);
  const [selectedUUID, setSelectedUUID] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedDeviceId, setSelectedDeviceId] = useState("");

  const { userId, deviceId } = useParams();

  const chatURL = "wss://fusion-chat-backend.herokuapp.com/ws/chat";

  const [userMessage, setUserMessage] = useState("");
  const [userInput, setUserInput] = useState("");

  const [userProfileData, setUserProfileData] = useState([]);

  //loading state
  const [loading, setLoading] = useState(true);

  const [userList, setUserList] = useState([
    // {
    //   content: "hello dr viktor von doom",
    //   created_at: "Oct 9, 2021 8:47 PM",
    //   device_id: "a5a94601-b95e-4982-b29d-4fc0828c5736",
    //   user_id: "69784f7c-7fdb-4ee0-bc63-e1a2e1baac16",
    // },
    // {
    //   content: "sas",
    //   created_at: "Oct 10, 2021 12:48 AM",
    //   device_id: "9f6f4abd-df99-4698-80f4-9134059d9103",
    //   user_id: "c45de7e0-57d7-4ca7-9296-89a108c0ff72",
    // },
  ]);

  const confirmDeleteConversationText =
    "Are you sure to delete this conversation?";

  function confirmDeleteConversation() {
    deleteConversation(selectedUserId, selectedDeviceId, writeKey);
    message.info("Chat deleted !");
  }

  const [selectedRadioOption, setSelectedRadioOption] = useState("Profile");

  const userProfileRadioOptions = [
    { label: "Profile", value: "Profile" },
    { label: "Actions", value: "Actions" },
  ];

  const onUserProfileRadioChange = (e) => {
    console.log("radio4 checked", e.target.value);
    setSelectedRadioOption(e.target.value);
  };

  //check if already intialized(otherwise throws error)
  if (client === undefined && writeKey !== "") {
    //console.log(writeKey);
    let room = `${writeKey}`;
    client = new W3CWebSocket(`${chatURL}/${room}/`);
  }
  const handleWebSocketSend = (payloadToSend) => {
    if (payloadToSend !== "") {
      client.send(
        JSON.stringify({
          command: "new_message",
          room_name: "608813b5254914007109279a",
          token: "608813b5254914007109279a",
          user_id: `${selectedUserId}`,
          device_id: `${selectedDeviceId}`,
          from: "agent-console",
          text: `${payloadToSend}`,
        })
      );
    }
  };

  const fetchPreviousChats = (userId, deviceId) => {
    client.send(
      JSON.stringify({
        command: "fetch_messages",
        room_name: `${writeKey}`,
        token: `${writeKey}`,
        user_id: `${userId}`,
        device_id: `${deviceId}`,
      })
    );
  };

  // handle input entered in input field
  const handleUserInput = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  const handleSendButton = () => {
    if (userInput !== "") {
      handleWebSocketSend(userInput);
      setUserInput("");
      document.getElementById('text-area').value = '';
    }
  };

  const openUserChat = (event) => {
    //console.log(event.key);
    let userId = userList[event.key].user_id,
      deviceId = userList[event.key].device_id;

    //console.log(userId, deviceId);

    setSelectedUserId(`${userId}`);
    setSelectedDeviceId(`${deviceId}`);
    fetchPreviousChats(userId, deviceId);
    setUserProfileData([]);
    getUUID(userId, deviceId);

    // history.push(
    //   `/action/${userList[event.key].user_id}/${userList[event.key].device_id}`
    // );
  };

  // Get UUID for
  const getUUID = async (userId, deviceId) => {
    try {
      let filterString = JSON.stringify([
        {
          Property: "user_id",
          Operator: "is equal",
          Value: `${userId}`,
        },
        {
          Property: "device_id",
          Operator: "is equal",
          Value: `${deviceId}`,
        },
      ]);
      const response = await fetch(
        `${serverUrl}/users?filters=${filterString}&dateTime=All time&writeKey=${writeKey}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const UserIDs = await response.json();
      let UUID = UserIDs[0].uuid;
      //console.log(UUID);
      setSelectedUUID(UUID);
      // fetch user profile data with using UUID
      getUserProfile(UUID, userId, deviceId, writeKey);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch users profile data
  const getUserProfile = async (uuid, userId, deviceId, writeKey) => {
    try {
      if (writeKey.length > 0) {
        const response = await fetch(
          `${serverUrl}/user-personal-data?uuid=${uuid}&userId=${userId}&deviceId=${deviceId}&writeKey=${writeKey}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userProfileData = await response.json();

        //console.log(userProfileData);
        setUserProfileData(userProfileData);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Get list of old conversations with users
  const getAllConversations = async (writeKey) => {
    try {
      setLoading(true);
      if(writeKey) {
        fetch(`${chatServerUrl}/rooms/getAllUsers/${writeKey}/`).then(
          (response) =>
            response.json().then((object) => {
              var conversations = object;
              //console.log(conversations);
              conversations.map((conversation) => {
                conversation.created_at = moment(
                  conversation.created_at
                ).fromNow();

                return 0;
              });
  
              setUserList(conversations);
            })
        );
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Get list of old conversations with users
  const deleteConversation = async (userId, deviceId, writeKey) => {
    try {
      fetch(`${chatServerUrl}/rooms/deleteChat/`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device_id: `${deviceId}`,
          user_id: `${userId}`,
          token: `${writeKey}`,
        }),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          //console.log(JSON.stringify(data));
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  // connect to private room and handle incoming messages
  useEffect(() => {
    //connecting to web-socket chat server
    if (client !== undefined) {
      client.onopen = () => {
        //console.log("WebSocket Client Connected");
        setSocketConnected(true);
      };

      //check if connection already exists
      if (client.readyState === client.OPEN) {
        setSocketConnected(true);
      }

      // receives both chats received from agent and chat delivered from user
      client.onmessage = (message) => {
        //incoming message
        let incomingMessage = JSON.parse(message.data);

        //if incoming message is a single new message
        if (incomingMessage.command === "new_message") {
          let messageContent = incomingMessage.message;
          messageContent.created_at = moment(messageContent.created_at).format(
            "lll"
          );
          let updatedChats = [...chats, messageContent];
          setChats(updatedChats);
        }
        // else if incoming message command is messages(last 50 conversation data)
        else if (incomingMessage.command === "messages") {
          let lastFiftyChats = incomingMessage.messages
            .slice(0)
            .reverse()
            .map((element) => {
              element.created_at = moment(element.created_at).format("lll");
              return element;
            });

          //console.log(lastFiftyChats);
          let updatedChats = [...lastFiftyChats];
          setChats(updatedChats);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // check if new message saved in userMessage context
  // if yes send it chat-server then empty userMessage context
  useEffect(() => {
    handleWebSocketSend(userMessage);
    setUserMessage("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMessage]);

  useEffect(() => {
    getAllConversations(writeKey);
  }, [chats, writeKey]);

  return (
    <div className="Action">
      {/** coming soon modal */}
      {/* <Modal title="Chat" visible={false} footer={null}>
        <h1>🏗 Coming Soon ..</h1>
        <p>This feature is under construction and will be shipped soon 😄</p>
        <p> You can go back in your browser</p>
      </Modal> */}
      <Sidenav subPath={userId + "/" + deviceId} />

      <div className="content-container">
        {socketConnected === true ? (
          <div className="content">
            <div className="chat-list">
              <div className="chat-list-top-bar">
                <h2 style={{ margin: "12px 0px 0px 20px" }}>Conversations</h2>
              </div>
              <div className="user-list">
                <Menu style={{ width: "100%" }} mode="inline">
                  {/** map the userList to menu.item component */}

                  {loading ? (
                    // <Spin size="medium" style={{ margin: "15vh 0 0 45%" }} />
                    <div style={{ width: "85%", margin: "10px 0px 10px 10px" }}>
                      <Skeleton loading={loading} active avatar></Skeleton>
                      <Divider />
                    </div>
                  ) : (
                    userList.map((user, index) => {
                      return (
                        <Menu.Item
                          id="user-list-item"
                          key={index}
                          onClick={openUserChat}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* <Link to={`/action/${user.user_id}/${user.device_id}`} /> */}
                            <Badge count={0}>
                              <Avatar
                                shape="circle"
                                size={40}
                                icon={<UserOutlined />}
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#1890ff",
                                }}
                              >
                                {/* {user.name[0] + user.name[1]} */}
                              </Avatar>
                            </Badge>
                            {/* <h1 className="user-name">{user.name}</h1> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                marginLeft: "1px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  width: "20vw",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                }}
                              >
                                <h1 className="user-name">
                                  visitor_
                                  {user.user_id.substr(user.user_id.length - 5)}
                                </h1>
                                <h1 className="conversation-date">
                                  {user.created_at}
                                </h1>
                              </div>

                              <h1 className="user-conversation">
                                {user.content}
                              </h1>
                            </div>
                          </div>
                        </Menu.Item>
                      );
                    })
                  )}
                </Menu>
              </div>
              {selectedUserId === "" && selectedDeviceId === "" ? (
                <div className="chat-list-bottom-bar">
                  <h2 style={{ margin: "12px 0px 0px 20px" }}>Profile</h2>
                </div>
              ) : null}
            </div>

            <div className="user-chats">
              <div className="header">
                <h3 style={{ margin: "0px auto 0px 10px" }}>
                  visitor_
                  {selectedUserId.substr(selectedUserId.length - 5)}
                </h3>

                <Popconfirm
                  placement="bottomRight"
                  size="large"
                  title={confirmDeleteConversationText}
                  onConfirm={confirmDeleteConversation}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="dashboard-delete-button">
                    <Trash2 size="20px" color="#d3461b" />
                  </button>
                </Popconfirm>
              </div>

              {selectedUserId !== "" && selectedDeviceId !== "" ? (
                <ChatWindow
                  chats={chats}
                  userId={selectedUserId}
                  deviceId={selectedDeviceId}
                />
              ) : null}

              {selectedUserId !== "" && selectedDeviceId !== "" ? (
                <div className="input-section">
                  <textarea
                    // onChange={handleUserInput}
                    onChange={handleUserInput}
                    id="text-area"
                    placeholder="Reply here..."
                    minLength="1"
                  ></textarea>
                  <button
                    id="send-button"
                    onClick={handleSendButton}
                    // style={{ background: `${config.primaryColor}` }}
                  >
                    <svg
                      // style={{ background: `${config.primaryColor}` }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 26 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-send"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              ) : (
                <EmptyWindow />
              )}
            </div>
            {/* {selectedUserId !== "" && selectedDeviceId !== "" ? (
          <div className="user-info"></div>
        ) : null} */}

            {selectedUserId !== "" && selectedDeviceId !== "" ? (
              <div className="user-info">
                <div className="user-info-text-container">
                  <h1 className="user-info-text">
                    <SmileOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.name !== " " &&
                    userProfileData.name !== undefined
                      ? userProfileData.name
                      : "unknown"}
                  </h1>
                  <h1 className="user-info-text">
                    <MailOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.email !== " " &&
                    userProfileData.email !== undefined
                      ? userProfileData.email
                      : "unknown"}
                  </h1>
                  <h1 className="user-info-text">
                    <PhoneOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.phone !== " " &&
                    userProfileData.phone !== undefined
                      ? userProfileData.phone
                      : "unknown"}
                  </h1>
                </div>

                <Radio.Group
                  size="large"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                  options={userProfileRadioOptions}
                  onChange={onUserProfileRadioChange}
                  value={selectedRadioOption}
                  optionType="button"
                  buttonStyle="solid"
                />

                <div className="user-info-text-container">
                  <h1 className="user-info-text">
                    <HomeOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.properties !== " " &&
                    userProfileData.properties !== undefined
                      ? userProfileData.properties.city
                      : "unknown"}
                  </h1>

                  <h1 className="user-info-text">
                    <EnvironmentOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.properties !== " " &&
                    userProfileData.properties !== undefined
                      ? userProfileData.properties.country
                      : "unknown"}
                  </h1>

                  <h1 className="user-info-text">
                    <LinkOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.properties !== " " &&
                    userProfileData.properties !== undefined
                      ? userProfileData.properties.initial_referrer
                      : "unknown"}
                  </h1>
                  <h1 className="user-info-text">
                    <CompassOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.properties !== " " &&
                    userProfileData.properties !== undefined
                      ? userProfileData.properties.browser
                      : "unknown"}
                  </h1>
                  <h1 className="user-info-text">
                    <DesktopOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.properties !== " " &&
                    userProfileData.properties !== undefined
                      ? userProfileData.properties.deviceType
                      : "unknown"}
                  </h1>

                  <h1 className="user-info-text">
                    <GlobalOutlined
                      style={{
                        fontSize: "20px",
                        color: "#08c",
                        marginRight: "10px",
                      }}
                    />
                    {userProfileData.properties !== " " &&
                    userProfileData.properties !== undefined
                      ? userProfileData.properties.os
                      : "unknown"}
                  </h1>
                </div>

                <Link
                  style={{ marginTop: "auto", marginBottom: "50px" }}
                  to={`/user/${selectedUUID}/${selectedUserId}/${selectedDeviceId}`}
                >
                  <Button>Deep dive</Button>
                </Link>
              </div>
            ) : null}
          </div>
        ) : (
          <Spin size="medium" style={{ margin: "15vh 0 0 45%" }} />
        )}
      </div>
    </div>
  );
}
export default Action;

//chat bubbles
function ChatBubbleUser(props) {
  return (
    <React.Fragment>
      <div id="user-chat-bubble">
        <h1>{props.chat}</h1>
        <p>{props.time}</p>
      </div>
    </React.Fragment>
  );
}

function ChatBubbleAgent(props) {
  return (
    <React.Fragment>
      <div id="agent-chat-bubble">
        <h1>{props.chat}</h1>
        <p>{props.time}</p>
      </div>
    </React.Fragment>
  );
}

function ChatWindow(props) {
  const scrollRef = useRef();
  let chats = props.chats;
  //autoscroll chat window on new messages
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [chats]);
  return (
    <React.Fragment>
      <div className="chat-window">
        {chats.map((chat, index) => {
          if (
            chat.author === "user" &&
            chat.user_id === props.userId &&
            chat.device_id === props.deviceId
          ) {
            return (
              <div ref={scrollRef}>
                <ChatBubbleUser
                  chat={chat.content}
                  time={chat.created_at}
                  key={index}
                />
              </div>
            );
          } else if (
            chat.author !== "user" &&
            chat.user_id === props.userId &&
            chat.device_id === props.deviceId
          ) {
            return (
              <div ref={scrollRef}>
                <ChatBubbleAgent
                  chat={chat.content}
                  time={chat.created_at}
                  key={index}
                />
              </div>
            );
          }
          return 0;
        })}
      </div>
    </React.Fragment>
  );
}

function EmptyWindow() {
  return (
    <React.Fragment>
      <div className="chat-window">
        <Empty style={{ margin: "40% 0% 0% 0%" }} />
      </div>
    </React.Fragment>
  );
}
