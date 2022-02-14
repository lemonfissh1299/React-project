
// import { useState } from 'react';
import './App.css'
import { CheckCircleOutlined } from '@ant-design/icons';
import { Row, Col, Button, Card, Modal} from 'antd';
import { Table } from 'antd';

const maintenance_table = props => {
  const sensorSource = [
    {
      key: '1',
      start: '25/12/2021',
      id: '21342',
      name: 'Sensor A',
      location:'Building A',
      responsible: 'Lim Chee Kuang',
    },
    {
      key: '2',
      start: '27/12/2021',
      end: '28/12/2021',
      id: '21342123',
      name: 'Sensor B',
      location: 'Building B',
      responsible: 'Tan Bo Seng',
      remarks: 'Tester',
    },
    {
      key: '3',
      start: '30/12/2021',
      end: '31/12/2021',
      id: '777',
      name: 'Humidity',
      location: 'Building E',
      responsible: 'Clement Ah Huat',
      remarks: 'Tester',
    },
  ]

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
            key: 'completed',
            render: () => {
            <Button>
              icons=  {<CheckCircleOutlined/>}
            </Button>  
              
            }
        },
    ]
    return (
        <>
        <Modal>
        <h1>{props.datetitle}</h1>
        <Card>
          <Row>
            <Col span={6}>
              <p>Not Done:{}</p>
            </Col>
            <Col span={6}>
              <p>Completed:{}</p>
            </Col>
            <Col span={6}>
              <p>Missed:{}</p>
            </Col>
            <Col span={6}>
              <p>Total:{}</p>
            </Col>
          </Row>

        </Card>
        <Table
          style={
            {
              margin: 20,
            }
          }
          dataSource={sensorSource}
          columns={maintenance_columns}
          pagination={{
            pageSize: 6,
          }}
        />
        </Modal>

         
         
        </>
    )
  }



export default maintenance_table