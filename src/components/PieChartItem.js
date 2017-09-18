import React, { Component } from 'react';
import {PieChart , Pie, Label, ResponsiveContainer} from 'recharts';
class PieChartItem extends Component {
  shouldComponentUpdate(prevProps, nextProps) {
    if(prevProps !== nextProps) return true
    return false
  }
  render() {
    const { data, colors, name, chartsColors } = this.props.chart;
    const pieLabel = (input) =>  `${input* 100}%`;
    const calcDegree = (input) => -((input * 100 * 3.6)-90)
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
              endAngle={data && data[0] && calcDegree(data[0][name])}
              innerRadius="60%"
              outerRadius="80%"
              fill={colors.chart}
              stroke="none"
            >
              <Label fill={chartsColors[name]} value={data && data[0] && pieLabel(data[0][name])} position="center" />
            </Pie>
          </PieChart>
          </ResponsiveContainer>
    )
  }
};

export default PieChartItem;