/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React, {useState, useEffect} from "react";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import { Input, Button, notification, Select } from 'antd';
import { UserOutlined, InboxOutlined, LoadingOutlined} from '@ant-design/icons';
import './Email.css'
import axios from "axios";
import ReactQuill, {Quill} from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import EmailCard from "../../Components/EmailCard.js";
import { connect } from "react-redux";


function Email(props) {

    var Block = Quill.import('blots/block');
    Block.tagName = 'div';
    Quill.register(Block);

    const { Option } = Select;
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const [cohorts, setCohorts] = useState([]);
    const [sentEmails, setSentEmails] = useState([]);
    const [token, ] = useState(props?.writeKeyModel?.token);
    const [writeKey, ] = useState(props?.writeKeyModel?.user);

    const getCohorts = async (
      writeKey
    ) => {
        axios.get(`${serverUrl}/getCohorts?writeKey=${writeKey}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            const datas = res.data
            let cNames = []
            datas.map((data, key) => (
                cNames.push({name: data.name, filters: data.filters})
            ))
            setCohorts(cNames)
            setLoading(false);
        })
    }

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var param_arr = params?.filters?.split(' is ');
    if(param_arr) {
      var default_filter = {};
      default_filter[param_arr[0]] = param_arr[1];
    }
    
    useEffect(() => {
      getCohorts(writeKey)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[writeKey])

    var formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]

    var modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }

    const emailBaseAPI = process.env.REACT_EMAIL_BASE_API
    const planURL = process.env.REACT_APP_USER_URL
    const [email, setEmail] = useState([]);
    const [emailText, setEmailText] = useState();
    const [loading, setLoading] = useState(false);

    function handleChange(value) {
      setEmail([])
      axios.get(`${serverUrl}/getCohortEmails?writeKey=${writeKey}&filter=${value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        let users = res.data
        console.log(users)
        users.map((user) => (
          email.push(user.properties.email)
        ))
        setEmail(email)
      })      
    }

    useEffect(() => {
      axios.get(`${serverUrl}/getCohortEmails?writeKey=${writeKey}&filter=${JSON.stringify(default_filter)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        let users = res.data
        console.log(users)
        users.map((user) => (
          email.push(user.properties.email)
        ))
        setEmail(email)
      })

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
      setEmail(email)
    }, [email])

    const openNotification = (content) => {
        notification.open({
          message: content.message,
          description: content.description,
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

    const sendEmail = async () => {
        setLoading(true)
        await axios.get(planURL + `getEmailStatusLimit/${writeKey}`).then((res) => {
          if(res.data === 'OK') {
            const url = emailBaseAPI + 'email/sendEmail/'
            axios.post(url, {
                emails: email,
                sendAs: 'fusion',
                text: emailText,
                companyName: 'fusion-org',
                write_key: writeKey
            }).then((res) => {
                setLoading(false);
                let content = {
                  message: 'Mail Sent',
                  description: 'Thanks for sending the mail'
                }
                openNotification(content);
            })
          } else {
            let content = {
              message: 'Limit Reached',
              description: 'You have consumed all your credits'
            }
            openNotification(content);
          }
        })
    }   

    const getEmails = () => {
      const url = emailBaseAPI + `email/getEmails/${writeKey}`
      axios.get(url).then((res) => {
          setSentEmails(res.data)
      })
    }

    useEffect(() => {
      getEmails();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Dashboard">
            <div className="main-container">
                <Sidenav />
                <div className="content-container">
                    <div className="content">
                        <div className="header">
                            <h1>Send Emails</h1>
                            <p>Send Engaging Emails to Cohorts</p>
                            <div style={{display: 'flex', gap: "30px", width: '100%'}}>
                              <div className="email-section">
                                <div className="email-input">
                                    <Input disabled={cohorts} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} size="large" placeholder="Email" prefix={<UserOutlined />} />
                                    <Select
                                      showSearch
                                      style={{ width: 200 }}
                                      placeholder="Cohort"
                                      optionFilterProp="children"
                                      onChange={handleChange}
                                      defaultValue={JSON.stringify(default_filter)}
                                      filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                    >
                                      {
                                        cohorts.map((cohort) => (
                                          <Option value={JSON.stringify(cohort.filters)}>{cohort.name}</Option>
                                        ))
                                      }
                                    </Select>
                                </div>
                                <div className="email-text">
                                    <ReactQuill
                                        theme="snow"
                                        modules={modules}
                                        formats={formats}
                                        onChange={(e) => {
                                            setEmailText(e)
                                        }}
                                        placeholder={"Type your email Content"}
                                        preserveWhitespace={true}
                                    />
                                </div>
                                <Button onClick={sendEmail} className="email-button" type="primary" icon={loading ? "" :<InboxOutlined />} size="large">
                                    { loading ? <LoadingOutlined /> : "Send Email"}
                                </Button>
                              </div>
                              <div className="sentEmail">
                                {
                                  sentEmails.map((item, key) => (
                                    <EmailCard email={item.mailed_to} time={item.created_at}/>
                                  ))
                                }
                              </div>
                            </div>
                        </div>
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

export default connect(mapState, mapDispatch)(Email);
 