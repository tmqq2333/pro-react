// 封装一个轮播器
import React, { useState, useEffect } from 'react';
// swiper@6.8.4
import { Swiper, SwiperSlide } from 'swiper/react'; // 引入js
import SwiperCore, { Autoplay } from 'swiper/core'; // 引入核心插件和自动播放组件
import 'swiper/swiper.min.css'; // 引入样式
import { styled } from 'styled-components';
import EchartsCompo from '@/components/ChartCompo';
import { values } from 'lodash';
const url = require('@/assets/image/panel.png');
SwiperCore.use([Autoplay]); // 使用插件，插件名放入[]中，这一行是重点
const all = require('../../assets/image/state/car-dest.png');
const hand = require('../../assets/image/state/car-loc.png');
const auto = require('../../assets/image/state/car-speed.png');
const Slide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  .swiper-slide {
    /* height: 40px !important; */
    width: 200px;
    line-height: 40px;
    // font-size: 18px;
    display: flex;
    flex-direction: column;
    background: url(${url}) no-repeat;
    background-size: 100% 100%;
    //  background-color: #08314b;
    span {
      //flex: 1;
      display: inline-block;
      /* overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center; */
    }
    .slide-name {
      /* background: url(${url}) no-repeat;
      background-size: 100% 100%; */
      border: 4px #03d5da double;
      border-radius: 10%;
      margin: 20px;
      margin-top: 20%;
      text-align: center;
      align-items: center;
      font-size: 1rem;
    }
    .slide-state {
      width: 100%;
      height: 38%;
    }
    .slide-coor {
      display: flex;
      align-items: center;
      justify-content: space-around;
      dt {
        border: 2px #24bdef solid;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
      dd {
        text-align: center;
        // font-size: 18px;
      }
    }
    .slide-reel {
      text-align: center;
      dd {
        text-decoration: underline;
      }
    }
  }
  .table-top {
    height: 35px;
    line-height: 35px;
    background-color: #133853;
    color: #03d5da;
    //   font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    span {
      display: inline-block;
    }
  }
`;
const color = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 1,
  y2: 0,
  colorStops: [
    {
      offset: 0,
      color: '#188df0',
    },
    {
      offset: 1,
      color: '#ffea71',
    },
  ],
  global: false, // 缺省为 false
};
const getoption = (value: number) => {
  return {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 2,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              // [0.5, '#f6cd4c'],
              [1, color],
            ],
          },
        },
        itemStyle: {
          color: '#58D9F9',
          shadowColor: 'rgba(0,138,255,0.45)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
        // pointer: {
        //   icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        //   length: '12%',
        //   width: 20,
        //   offsetCenter: [0, '-60%'],
        //   itemStyle: {
        //     color: 'auto'
        //   }
        // },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '55%',
          width: 6,
          offsetCenter: [0, '5%'],
        },
        axisTick: {
          length: 8,
          lineStyle: {
            color: 'auto',
            width: 1,
          },
        },
        splitLine: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2,
          },
        },
        axisLabel: {
          color: '#464646',
          fontSize: 14,
          distance: -50,
          color: '#fff',
          rotate: 'tangential',
          formatter: function (value: any) {
            if (value === 0.5) {
              return '自动';
            } else if (value === 1.5) {
              return '手动';
            }
            return '';
          },
        },
        title: {
          offsetCenter: [0, '-10%'],
          fontSize: 16,
        },
        detail: {
          show: false,
          fontSize: 18,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: function (value: any) {
            return Math.round(value * 100) + '';
          },
          color: 'inherit',
        },
        data: [
          {
            value: value + 0.5,
            //   name: 'Grade Rating'
          },
        ],
      },
    ],
  };
};
const SwiperComp = (props: { data: any[]; list: any[]; width?: number }) => {
  const { data, width = 1000 } = props;
  const [wh, setWh] = useState(0);
  useEffect(() => {
    let box = document.getElementById('topslideSwiperId');
    let h = box!.clientHeight - 60;
    let w = box!.clientWidth - 10;
    console.log(w,h);
    setWh(h);
  }, []);
  return (
    <Slide id="topslideSwiperId">
      <Swiper
        style={{ height: wh + 'px', width: wh>500?'1100px':'1000px', color: '#fff' }}
        // 在组件标签中进行配置，注意这里的autoplay都是小写的哦
        spaceBetween={wh>500?20:16}
        slidesPerView={4}
        autoplay={data.length > 4}
        loop
        //direction="vertical"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <span className="slide-name">{item.name}</span>
              <dl className="slide-reel">
                <dt>行车调运卷号：</dt>
                <dd>{item.reel}</dd>
              </dl>

              <div className="slide-state">
                <EchartsCompo configOption={getoption(item.mode)} />
              </div>
              <div className="slide-coor">
                <dl>
                  <dt>X</dt>
                  <dd>{item.x}</dd>
                </dl>
                <dl>
                  <dt>Y</dt>
                  <dd>{item.y}</dd>
                </dl>
                <dl>
                  <dt>Z</dt>
                  <dd>{item.z}</dd>
                </dl>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </Slide>
  );
};

export default SwiperComp;
