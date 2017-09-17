import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,AreaChart, Area, ResponsiveContainer} from 'recharts';
import PieChartItem from './PieChart';
class Dashboard extends Component {
  render() {
    const {user} = this.props.profile
    const {selectMetricsYear} = this.props
    const {selected} = this.props.profile
    const charts = {
      'blue_metric': '#2dc0d2',
      'orange_metric': '#f36c27',
      'gray_metric': '#6b7989'
    }
    let testFunc = (data) => {
     let mappedValue =  (user && user.metrics && user.metrics[data.index]) || {}
     return mappedValue && <text x={data.x} y={data.y}><tspan>{mappedValue.grow_units}</tspan> <tspan>{mappedValue.units}</tspan></text>
    }
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
            {Object.keys(charts).map(chart => <PieChartItem key={chart} chart={{colors:{chart:charts[chart], default:'#bcd0cc'}, data:selected, name:chart, helper:charts}} />)}
          </div>
          <div className="dashboard__metrics-barchart">
            <ResponsiveContainer>
              <BarChart data={user&&user.metrics}>
                <XAxis dataKey="year"/>
                <YAxis dataKey="percent"/>
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Bar dataKey="percent"  barSize={30} fill="#2dc0d2" onClick={(e)=>selectMetricsYear(e.payload)} />
              </BarChart>
          </ResponsiveContainer>
          </div>
          <div className="dashboard__metrics-areachart">
            <ResponsiveContainer>
              <AreaChart  data={user&&user.metrics}>
                <XAxis dataKey="year"/>
                <YAxis dataKey="units"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Area label={testFunc} type='monotone' dataKey='units' stroke='#8884d8' fill='#8884d8' fillOpacity={0.3}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    )
  }
};

export default Dashboard;