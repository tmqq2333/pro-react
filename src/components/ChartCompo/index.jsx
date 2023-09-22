import React, { useEffect, useState, memo, useRef, useCallback, RefObject } from 'react';
import { merge, debounce } from 'lodash'; // 按需引入
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
//resize针对弹窗echarts,请添加此属性，resize={dialogVisible}
const basicOption = {
  // title: {
  //   textStyle: {
  //     color: "#fff",
  //   },
  // },
  grid: {
    top: 30,
    right: 10,

    bottom: 10,
    containLabel: true,
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [],
};
function useEcharts(configOption, basicOption){
  const chartRef = useRef(null);

  const assembleDataToOption = useCallback(() => {
    if (!configOption) return;
    return merge({}, basicOption, configOption);
  }, [basicOption, configOption]);

  const updateChartView = useCallback(() => {
    const chart = echarts.getInstanceByDom(chartRef.current);
    if (!chart) return;
    const fullOption = assembleDataToOption();
    if (fullOption) chart.setOption(fullOption);
  }, [assembleDataToOption]);
  const handleWindowResize = useCallback(() => {
    const chart = echarts.getInstanceByDom(chartRef.current);
    const __resizeHandler = () => {
      if (!chart) return;
      chart.resize();
    };
    const debouncedResizeHandler = debounce(__resizeHandler, 100);
    window.addEventListener('resize', debouncedResizeHandler);
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    };
  }, []);
  useEffect(() => {
    let echartsInit = echarts.init(chartRef.current);
    chartRef.current = echartsInit.getDom();
    updateChartView();
    handleWindowResize();
    return () => {
      if (chartRef.current) {
        echarts.dispose(chartRef.current);
      }
    };
  }, [updateChartView, handleWindowResize]);
  return chartRef;
}
function EchartsWrapper(props) {
  const { configOption, resize, getcharts } = props;
  const chartRef = useEcharts(configOption, basicOption);
  let chart;
  useEffect(() => {
    chart = echarts.getInstanceByDom(chartRef.current);
    getcharts?.(chart);
  }, []);
  useEffect(() => {
    if (resize) {
      if (!chart) return;
      chart.resize();
    }
  }, [resize]);
  return (
    <div
      ref={chartRef}
      // onEvents={onEvents}
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
}
export default memo(EchartsWrapper);
