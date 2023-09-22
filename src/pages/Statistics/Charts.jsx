import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { ChartsCss } from './charts.js';
const EchartsEditor = () => {
  const [option, setOption] = useState({
    title: {
      text: '示例图表',
    },
    tooltip: {},
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 5],
      },
    ],
  });

  const onChangeOption = (newValue) => {
    try {
      const newOption = JSON.parse(newValue);
      setOption(newOption);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChartsCss className="echarts-editor">
      <div className="option-editor">
        <textarea value={JSON.stringify(option, null, 2)} onChange={(e) => onChangeOption(e.target.value)}></textarea>
      </div>
      <div className="chart-container">
        <ReactEcharts className="react-echarts" option={option} />
      </div>
    </ChartsCss>
  );
};

export default EchartsEditor;
