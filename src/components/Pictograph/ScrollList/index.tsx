// 封装一个轮播器
import React, { useState, useEffect } from 'react';
// swiper@6.8.4
import { Swiper, SwiperSlide } from 'swiper/react'; // 引入js
import SwiperCore, { Autoplay } from 'swiper/core'; // 引入核心插件和自动播放组件
import 'swiper/swiper.min.css'; // 引入样式
import { styled } from 'styled-components';

SwiperCore.use([Autoplay]); // 使用插件，插件名放入[]中，这一行是重点
const Slide = styled.div`
  padding: 0 10px;
  height: 100%;
  .swiper-slide {
    height: 40px !important;
    line-height: 40px;
    // font-size: 18px;
    display: flex;
    span {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
  }
  .table-top {
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
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
const speed = 20;
const SwiperComp = (props: { data: any[]; list: any[] }) => {
  const { data, list } = props;
  const [heightnum, setHeightnum] = useState(200);
  useEffect(() => {
    let box = document.getElementById('slideSwiperId');
    let num = box!.clientHeight - 60;
    setHeightnum(num);
  }, []);
  return (
    <Slide id="slideSwiperId">
      <div className="table-top">
        {list.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>
      <Swiper
        style={{ height: heightnum + 'px', color: '#fff' }}
        // 在组件标签中进行配置，注意这里的autoplay都是小写的哦
        spaceBetween={15}
        slidesPerView={5}
        autoplay={data.length > 8}
        loop
        // speed={1800}
        direction="vertical"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <span>{item.name}</span>
              <span>{item.x}</span>
              <span>{item.y}</span>
              <span>{item.z}</span>
              <span>{item.reel}</span>
              <span>{item.mode}</span>
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
