import React, { Component } from 'react';
import {PieChart , Pie, Label, ResponsiveContainer} from 'recharts';
class PieChartItem extends Component {
  shouldComponentUpdate(prevProps, nextProps) {
    if(prevProps !== nextProps) return true
    return false
  }
  render() {
    const { data } = this.props.chart
    const { colors } = this.props.chart
    const { name } = this.props.chart
    const { helper } = this.props.chart
    return (
      <ResponsiveContainer>
        <PieChart>
            <Pie
              data={data}
              dataKey={name} 
              cx="50%" 
              cy="50%" 
              startAngle={90}
              endAngle={-270}
              innerRadius="60%"
              outerRadius="80%"
              fill={colors.default}
              stroke="none"
            >
            </Pie>
            <Pie
              data={data}
              dataKey={name} 
              cx="50%" 
              cy="50%" 
              startAngle={90}
              endAngle={data && data[0] && +(`${-((data[0][name] * 100 * 3.6)-90)}`)}
              innerRadius="60%"
              outerRadius="80%"
              fill={colors.chart}
              stroke="none"
            >
              <Label fill={helper[name]} value={data && data[0] && `${data[0][name]* 100}%`} position="center" />
            </Pie>
          </PieChart>
          </ResponsiveContainer>
    )
  }
};

export default PieChartItem;