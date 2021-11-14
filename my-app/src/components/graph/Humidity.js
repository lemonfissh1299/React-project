import React from 'react';
import { Line } from '@ant-design/charts' ;
import { Card } from 'antd';
import './Graph.css'

const Humidity = () => {
  const data = [
    { hour: '12pm', value: 3 },
    { hour: '1pm', value: 4 },
    { hour: '2pm', value: 1.5 },
    { hour: '3pm', value: 3.5 },
    { hour: '4pm', value: 4.9 },
    { hour: '5pm', value: 7.5},
    { hour: '6pm', value: 4.0},
    
  ];

  const config = {  
    xAxis: {
        text:'hour'
    },
    yAxis: {
        text:'value'
    },                                             
    data,
    width: 252,
    height: 200,
    xField: 'hour',
    yField: 'value',
    point:{},
  };
  return (
    <div className="site-card-border-less-wrapper">
      <Card>
        <p>Humidity</p>
        <p>30%</p>
        <Line {...config} />
      </Card>
    </div>
      );
};
export default Humidity;