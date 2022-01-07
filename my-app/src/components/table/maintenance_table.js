
import { useState } from 'react';
import { Button, Modal, Row, Typography } from 'antd';

const missedmaintenancetable = props => {
    const [Complete, setComplete] = useState(0)
    const [DateTitle, setDateTitle] = useState ()
    const [NotDone, setNotDone] = useState(0)
    const [Missed, setMissed] = useState(0)
    const [Total, setTotal] = useState(0)
    const maintenance_columns = [
        {
            title: 'Schedule Start Date',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: 'Schedule End Date',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: 'Sensor ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Sensor Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Responsible',
            dataIndex: 'responsible',
            key: 'responsible',
            defaultSortOrder: 'descend',
        },
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
            defaultSortOrder: 'descend'
        },
        {
            title: 'Completed',
            dataIndex: '',
            key: 'completed',
        },
    ]
    return (
        <div>
            <Row>
             <Col>
             <Typography.Title>{DateTitle}</Typography.Title>
             </Col>    
            
            </Row>


        </div>
    )








}

export default missedmaintenancetable