import styled from 'styled-components';
const ChartsCss = styled.div`
  background-color: #0d073d;
  display: flex;
  > div {
    flex: 1;
  }
`;

const setColumn = (data) => {
  const { label, value } = data;
  let data_X = label ?? ['第一', '第二', '第三', '第四', '第五', '第六'];
  let data_Y = value ?? [10, 20, 30, 5, 40, 90];
  let TopColor = [
    'rgba(232, 255, 20,1)',
    'rgba(12, 255, 255, 1)',
    'rgba(30, 255, 254, 1)',
    'rgba(255,255,255,1)',
    'rgba(50,255,45,1)',
    'rgba(194,80,56,1)',
  ];
  let RightColor = [
    'rgba(232, 197, 11,0.6)',
    'rgba(12, 215, 226, 0.6)',
    'rgba(30, 170, 254, 0.6)',
    'rgba(255,255,255,0.6)',
    'rgba(0,0,45,0.6)',
    'rgba(194,53,49,0.6)',
  ];
  let barTopColor = [
    'rgba(232, 197, 11,1)',
    'rgba(12, 215, 226, 1)',
    'rgba(30, 170, 254, 1)',
    'rgba(255,255,255,1)',
    '#3fa280',
    'rgba(194,53,49,1)',
  ];
  let barBottomColor = [
    'rgba(232, 197, 11,0)',
    'rgba(12, 215, 226, 0)',
    'rgba(30, 170, 254, 0)',
    'rgba(255,255,255,0)',
    'rgba(0,0,45,0)',
    'rgba(194,53,49, 0)',
  ];
  let option = {
    //backgroundColor: '#0d073d',
    tooltip: {
      show: true,
    },
    grid: {
      top: '15%',
      bottom: '20%',
      left: '13%',
      right: '3%',
    },
    legend: {
      show: false,
    },
    axisPointer: {
      // show: false,
      link: { xAxisIndex: 'all' },
      type: 'shadow',
      label: {
        backgroundColor: '#777',
      },
    },
    xAxis: {
      data: data_X,

      axisTick: {
        show: false,
      },
      axisLine: {
        // show: false,
        symbol: ['none'],
        symbolSize: [10, 17],
        lineStyle: {
          color: '#00ffff',
          width: 0, //  改变坐标线的颜色
        },
      },
      axisLabel: {
        show: true,
        interval: 0,
        // rotate: -30,
        margin: 25,
        align: 'center',
        textStyle: {
          fontSize: 12,
          color: '#00ffff',
        },
      },
    },
    yAxis: {
      splitLine: {
        // show: false,

        lineStyle: {
          color: '#00ffff',
          type: 'dashed',
          opacity: 0.4,
        },
      },
      // axisTick: {
      //   show: false,
      // },
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#00ffff',
        },
      },
      // axisLabel: {
      //   show: false,
      // },
    },
    series: [
      {
        name: '柱顶部',
        type: 'pictorialBar',
        symbol: 'diamond',
        symbolSize: [36, 10], // [36, 10],
        symbolOffset: [0, -4.5], // [0, -5]
        z: 20,
        // borderColor:'#000',
        // borderWidth:0.1,
        itemStyle: {
          color: function (params) {
            return TopColor[params.dataIndex];
          },
        },
        label: {
          show: true,
          position: 'top',
          fontSize: 20,
          fontFamily: 'tenxu',
          formatter: '{c}',
        },
        symbolPosition: 'end',
        data: data_Y,
      },
      {
        name: '柱底部',
        type: 'pictorialBar',
        symbol: 'none',
        symbolSize: [26, 10], // [36, 10]
        symbolOffset: [0, 5], // [0, 5]
        z: 12,
        itemStyle: {
          color: function (params) {
            return barTopColor[params.dataIndex];
          },
        },
        data: data_Y,
      },
      {
        type: 'bar',
        itemStyle: {
          color: function (params) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: barTopColor[params.dataIndex],
                },
                {
                  offset: 1,
                  color: barBottomColor[params.dataIndex],
                },
              ],
              global: false, // 缺省为 false
            };
          },
          barBorderRadius: [4, 0, 0, 100],
        },
        z: 16,
        silent: true,
        barWidth: 18,
        barGap: '-100%', // Make series be overlap
        data: data_Y,
      },
      {
        tooltip: {
          show: true,
        },
        type: 'bar',
        barWidth: 18,
        // barCategoryGap:'60%',
        itemStyle: {
          //右面
          color: function (params) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: barTopColor[params.dataIndex],
                },
                {
                  offset: 1,
                  color: barBottomColor[params.dataIndex],
                },
              ],
              global: false, // 缺省为 false
            };
          },
          borderWidth: 0.1,
          barBorderRadius: [0, 5, 100, 0],
        },
        data: data_Y,
        barGap: 0,
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 1000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  };
  return option;
};
const setBar = (data) => {
  const { label, value } = data;
  let maxData = 100;
  let option = {
    //backgroundColor: '#0d073d', //背景色
    grid: [
      {
        //图形的位置
        left: '20%',
        bottom: '20%',
        top: 3,
        right: '20%',
      },
    ],
    xAxis: {
      max: maxData,
      splitLine: { show: false },
      offset: 10,
      axisLine: {
        lineStyle: {
          color: '#999',
        },
      },
      axisLabel: {
        margin: 10,
      },
    },
    yAxis: {
      data: label ?? [],
      inverse: true, //反向放置
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        margin: 10,
        color: '#999',
        fontSize: 16,
      },
    },
    series: [
      {
        // current data
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: 'fixed',
        symbolMargin: '10%',
        symbolClip: true,
        symbolSize: [10, 30],
        symbolBoundingData: maxData,
        data: value ?? [],
        itemStyle: {
          normal: {
            // barMaxWidth: "20%",
            // barBorderRadius: 100,
            color: '#6DE8FA',
          },
        },
        label: {
          show: true,
          formatter: function (params) {
            return ((params.value / maxData) * 100).toFixed(1) + ' %';
          },
          position: 'right',
          offset: [10, 0],
          color: '#8cdcfe',
          fontSize: 18,
        },
        markLine: {
          symbol: 'none',
          label: {
            formatter: 'max: {c}',
            position: 'start',
          },
          lineStyle: {
            color: 'green',
            type: 'dotted',
            opacity: 0.2,
            width: 2,
          },
          data: [
            {
              type: 'max',
            },
          ],
        },
        z: 10,
      },
      {
        // full data
        tooltip: { show: false },
        type: 'pictorialBar',
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '10%',
        symbol: 'rect',
        symbolSize: [10, 30],
        symbolBoundingData: maxData,
        data: [maxData, maxData, maxData, maxData],
        z: 5,
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 1000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  }

  return option;
};
const setOption = (data) => {
  let option = {
    //backgroundColor: '#0d073d',
    tooltip: {
      trigger: 'item',
    },
    title: [
      {
        text: '周转率',
        textStyle: {
          color: '#22ac38',
          fontSize: 35,
        },
        itemGap: 20,
        left: '40%',
        top: '40%',
      },
    ],
    legend: {
      top: '5%',
      left: 'center',
      show: false,
    },
    polar: [
      {
        center: ['50%', '50%'], //中心点位置
        radius: ['68%', '82%'], //图形大小
      },
    ],
    angleAxis: {
      polarIndex: 0,
      min: 0,
      max: 100,
      show: false,
      // boundaryGap: ['40%', '40%'],
      startAngle: 90,
    },
    radiusAxis: {
      type: 'category',
      show: false,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },

    series: [
      {
        type: 'bar',
        z: 10,
        name: '周转率',
        data: data ?? [],
        coordinateSystem: 'polar',
        roundCap: true, // 是否圆角
        barWidth: 32, //大的占比环
        itemStyle: {
          opacity: 1,
          // color: "#14d88e"
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#2da178', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(232, 248, 243, 0.3)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      {
        type: 'pie',
        name: '内层细圆环',
        radius: ['80%', '70%'],
        center: ['50%', '50%'], //中心点位置
        startAngle: 99,
        clockwise: true,
        silent: true,
        itemStyle: {
          color: '#f3f3f7',
          opacity: 0.3,
        },
        tooltip: {
          show: false,
        },
        label: {
          show: false,
        },
        data: [100],
      },
    ],
  };
  return option;
};
export { ChartsCss, setColumn, setBar, setOption };
