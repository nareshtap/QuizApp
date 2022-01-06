import React, {useState,useEffect} from "react";
import axios from "axios";
import { Table } from "antd";
import "antd/dist/antd.css";
import moment from 'moment'

const QuizResult = () => {
    const [resultData, setResultData] = useState()
    const REACT_APP_BE_URL = 'http://localhost:8000'

    useEffect( () => {
        axios.get(`${REACT_APP_BE_URL}/api/answer/getAnswers`).then(res => setResultData(res.data.data));
    },[REACT_APP_BE_URL]);

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            align:"center",
        },
        {
            title: "Time",
            dataIndex: "time",
            align:"center",
        },
        {
            title: "Option",
            dataIndex: "option",
            align:"center",
        },
        {
            title: "Answer",
            dataIndex: "answer",
            align:"center",
        }
    ];

    const newData = resultData ? resultData.map((i) => {
        if(i.text.length > 10){
            return {
                key: i._id,
                date:moment(i.updatedAt).format('LL'),
                time:moment(i.updatedAt).format('LTS'),
                option: i.selectedOption,
                answer: i.text.trimLeft().slice(0,7).concat("...")
            }
        }else {
           return {
                key:i._id,
                date:moment(i.updatedAt).format('LL'),
                time:moment(i.updatedAt).format('LTS'),
                option:i.selectedOption,
                answer: i.text,
            }
        }
    }):""
    return (
        <div>
            <h2 style={{display:"flex",justifyContent:"center",margin:"30px"}}>Results</h2>
            <Table columns={columns} dataSource={newData} scroll={{ y: 550 }} />,
        </div>
    )
}

export default QuizResult
