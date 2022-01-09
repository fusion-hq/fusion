import React, {useEffect, useState} from "react";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import './Cohort.css'
import axios from "axios";
import {
    Button,
    Table
  } from "antd";
import { useHistory } from "react-router";
import {
    TrashIcon
  } from "@heroicons/react/solid";
import { connect } from "react-redux";

function Cohort(props) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    let history = useHistory();

    const columns = [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Description",
          dataIndex: "description",
        },
        {
          title: "Property",
          dataIndex: "filters",
        },
        {
            key: 'key',
            dataIndex: 'key',
            render: (text, record) => (
                <div style={{display: 'flex', gap: 10}}>
                    <Button onClick={() => {
                    history.push(`/email?filters=${record.filters}`)
                    }}> 
                        Engage
                    </Button>
                    <Button onClick={() => {
                        deleteCohort(writeKey, record.id)
                    }}> 
                        <TrashIcon style={{ height: "30px" }} color={"#93AAC4"}/>
                    </Button>
                </div>
                
            )
        }
    ];

    const [loading, setLoading] = useState(true);
    const [cohorts, setCohorts] = useState([]);
    const [token, ] = useState(props?.writeKeyModel?.token);
    const [writeKey, ] = useState(props?.writeKeyModel?.user);

    const deleteCohort = async (
        writeKey,
        id
    ) => {
        setLoading(true);
        await axios.get(`${serverUrl}/deleteCohort?writeKey=${writeKey}&id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            setLoading(false);
            getCohorts(writeKey)
        })
    }

    const getCohorts = async (
        writeKey
    ) => {
        await axios.get(`${serverUrl}/getCohorts?writeKey=${writeKey}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            const datas = res.data
            datas.map((data, key) => (
                data.filters = Object.keys(data.filters)[0] + ' is ' + Object.values(data.filters)[0]
            ))
            setCohorts(datas)
            setLoading(false);
        })
    }

    useEffect(() => {
        getCohorts(writeKey)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[writeKey])

    return (
        <div className="Dashboard">
            <div className="main-container">
                <Sidenav />
                <div className="content-container">
                    <div className="content">
                        <div className="header">
                            <h1>Your Cohorts</h1>
                            <p>See your saved Cohorts and Engage them</p>
                            <div className="table">
                                <Table
                                    className="user-table"
                                    columns={columns}
                                    dataSource={cohorts}
                                    loading={loading}
                                    pagination={true}
                                    rowKey={(record) => {
                                        return record.id;
                                    }}
                                    size="small"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    writeKeyModel: state.writeKeyModel,
});
const mapDispatch = (dispatch) => ({
    setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
});
export default connect(mapState, mapDispatch)(Cohort);