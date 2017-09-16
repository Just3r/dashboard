import React, { Component } from 'react';
import Footer from './Footer';
import {BarChart, ScatterChart,Scatter, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class Dashboard extends Component {
  render() {
    const {user} = this.props.profile
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        flexDirection: "column",
        width: "100%"
    }
    return (
      <div style={styles}>
        <div className="saldo"><span>$</span>{user && user.saldo}</div>
        <div className="dashboard">
          <div>
          <BarChart width={600} height={300} data={user && user.metrics}>
              <XAxis dataKey="year" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
              <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar type="monotone" dataKey="percent" fill="#8884d8" barSize={30} />
            </BarChart>
          </div>
          <div>
          <BarChart width={600} height={300} data={user&&user.metrics}
               margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="year"/>
            <YAxis dataKey="units"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="units" stackId="a" fill="#8884d8" />
            <Bar dataKey="grow_units" stackId="a" fill="#82ca9d" />
           </BarChart>
          </div>
        </div>
      </div>
    )
  }
};

export default Dashboard;
