import React, { Component } from 'react';
import {BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Bar} from 'recharts';

class BarChartItem extends Component {
  shouldComponentUpdate(prevProps, nextProps) {
    if(prevProps !== nextProps) return true
    return false
  }
  render() {
    const { data } = this.props;
    const { selectMetricsYear } = this.props;
    const labelBuilder = () => <text y={10} x={10} fill="#a3a5a8">percent</text>;
    return (
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="year" />
          <YAxis padding={{top:20}} dataKey="percent" label={labelBuilder}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="percent"  barSize={30} fill="#2dc0d2" onClick={(e)=>selectMetricsYear(e.payload)} />
        </BarChart>
      </ResponsiveContainer>
    )
  }
};

export default BarChartItem;

