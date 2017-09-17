import React, { Component } from 'react';
import {BarChart, ScatterChart,Scatter, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart, Cell,AreaChart, Area} from 'recharts';
class Dashboard extends Component {
  render() {
    const {user} = this.props.profile
    const {selectMetricsYear} = this.props
    const {selected} = this.props.profile
    const COLORS = ['#000', '#00C49F', '#FFBB28', '#FF8042'];
    const charts = ['blue_metric','gray_metric','orange_metric']
    return (
      <div className="dashboard" >
        <div className="dashboard__saldo">
          <div className="dashboard__saldo-item">
              <div className="item-key">saldo:</div>
              <div className="item-value">{Number(user && user.saldo).toLocaleString('de-DE', {style:'currency', currency: 'EUR'})}</div>
            </div>
          </div>
        <div className="dashboard__metrics">
          <div className="dashboard__metrics-piecharts">
          </div>
          
          {/*
            <div>
              {
                charts.map(chart =>
                  <PieChart key={chart} width={200} height={200} >
                  <Pie
                    data={selected} 
                    dataKey={chart}
                    cx={120} 
                    cy={200} 
                    innerRadius={60}
                    outerRadius={80} 
                    fill="#000"
                    paddingAngle={5}
                  >
                  <Cell fill={COLORS[0]}/>
                  <Cell fill={COLORS[2]}/>
                </Pie>
                </PieChart>
                )
              }
             </div>
          */}
          <div className="dashboard__metrics-barchart">
            <BarChart width={600} height={200} data={user && user.metrics}>
                <XAxis dataKey="year" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar type="monotone"  dataKey="percent" fill="#8884d8" barSize={30} onClick={(e)=>selectMetricsYear(e.payload)}>{123}</Bar>
              </BarChart>
          </div>
          <div className="dashboard__metrics-areachart">
            <AreaChart width={600} height={200} data={user&&user.metrics}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey="year"/>
              <YAxis dataKey="units"/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Area type='monotone' dataKey='units' stroke='#8884d8' fill='#8884d8' fillOpacity={0.3}/>
              <Area type='monotone' dataKey='year' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.3}/>
            </AreaChart>
          </div>
        </div>
      </div>
    )
  }
};

export default Dashboard;
