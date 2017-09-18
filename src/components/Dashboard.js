import React, { Component } from 'react';
import PieChartItem from './PieChartItem';
import BarChartItem from './BarChartItem';
import ComposedChartItem from './ComposedChartItem';
import { chartsColors } from '../helpers/index';
class Dashboard extends Component {
  render() {
    const {user} = this.props.profile
    const {selectMetricsYear} = this.props
    const {selected} = this.props.profile
    const {location} =this.props

    return (
      <div className="dashboard" >
        <header className="header">
          <h1 className="header-title">{location.pathname.slice(1)}</h1>
        </header>
        <div className="dashboard__saldo">
          <div className="dashboard__saldo-item">
              <div className="item-key">saldo:</div>
              <div className="item-value">{(user && +user.saldo).toLocaleString('de-DE', {style:'currency', currency: 'EUR'})}</div>
            </div>
          </div>
        <div className="dashboard__metrics">
          <div className="dashboard__metrics-piecharts">
            {Object.keys(chartsColors).map(chart => <PieChartItem key={chart} chart={{colors:{chart:chartsColors[chart], default:'#bcd0cc'}, data:selected, name:chart,chartsColors}} />)}
          </div>
          <div className="dashboard__metrics-barchart">
              <BarChartItem data={user && user.metrics} selectMetricsYear={selectMetricsYear} />
          </div>
          <div className="dashboard__metrics-areachart">
            <ComposedChartItem data={user && user.metrics} selectMetricsYear={selectMetricsYear} />  
          </div>
        </div>
      </div>
    )
  }
};

export default Dashboard;