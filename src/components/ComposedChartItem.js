import React, { Component } from 'react';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Bar, Area, ComposedChart} from 'recharts';

class ComposedChartItem extends Component {
  shouldComponentUpdate(prevProps, nextProps) {
    if(prevProps !== nextProps) return true
    return false
  }
  render() {
    const { data, selectMetricsYear } = this.props;
    const areaLabel = (e) => {
      let mappedValue = (data && data[e.index]) || {}
      return mappedValue && <text  x={e.x-10} y={e.y} dy={-20} fill={mappedValue.grow_units < 0 ? "#f36c27":"#2dc0d2"}>{`${mappedValue.grow_units}%`}</text>
    }
    const barLabel = (eventData) => {
      return <text x={eventData.x+20} y={eventData.y} dy={-5}>{eventData.value}</text>
    }
    const axisLabel = () => <text y={10} x={25} fill="#a3a5a8">units</text>
    
    return (
      <ResponsiveContainer>
        <ComposedChart  data={data}>
          <XAxis dataKey="year"/>
          <YAxis padding={{top:20}} dataKey="units" label={axisLabel}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Area  label={areaLabel} type='monotone' dataKey='units' stroke='#6b7989' fill='#6b7989' fillOpacity={0.3}/>
          <Bar label={barLabel} dataKey="units" fill="transparent" barSize={60}  onClick={(e)=>selectMetricsYear(e.payload)} />
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
};

export default ComposedChartItem;

