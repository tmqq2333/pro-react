import React, { useState, createRef, useEffect } from 'react';
import { ChartsCss, setColumn, setBar, setOption } from './statistics.js';
import EchartsCompo from '@/components/ChartCompo';
export default function Statistics() {
  // const [rateOption, setRateOption] = useState();
  // const dom = [];
  // for (let i = 0; i < 8; i++) {
  //   dom.push(createRef());
  // }

  useEffect(() => {}, []);
  const barOption = setBar({ label: ['2013', '2014', '206', '666'], value: ['10', '20', '50', '60'] });
  const boxOption = setOption([20]);
  const driveOption = setColumn({ label: ['2013', '2014', '206', '666'], value: ['10', '20', '50', '60'] });
  const getcharts = (myChart) => {
    function random() {
      return +(Math.random() * 100).toFixed(1);
    }
    setInterval(function () {
      const dynamicData = [random()];
      myChart.setOption({
        series: [
          {
            data: dynamicData.slice(),
          },
          {
            data: [100],
          },
        ],
      });
    }, 3000);
  };
  const getbarcharts = (myChart) => {
    let maxData = 100;
    function random() {
      return +(Math.random() * (maxData - 10)).toFixed(1);
    }
    setInterval(function () {
      const dynamicData = [random(), random(), random(), random()];
      myChart.setOption({
        series: [
          {
            data: dynamicData.slice(),
          },
          {
            data: [maxData, maxData, maxData, maxData],
          },
        ],
      });
    }, 3000);
  };
  const getsyscharts = (myChart) => {
    function random() {
      return +(Math.random() * 100).toFixed(1);
    }
    setInterval(function () {
      const dynamicData = [random(), random(), random(), random()];
      myChart.setOption({
        series: [
          {
            data: dynamicData.slice(),
          },
          {
            data: dynamicData.slice(),
          },
          {
            data: dynamicData.slice(),
          },
          {
            data: dynamicData.slice(),
          },
        ],
      });
    }, 3000);
  };
  return (
    <ChartsCss className="table-list">
      <EchartsCompo configOption={boxOption} getcharts={getcharts} />
      <EchartsCompo configOption={driveOption} getcharts={getbarcharts} />
      <EchartsCompo configOption={barOption} getcharts={getsyscharts} />
    </ChartsCss>
  );
}
