import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
interface TypePic {
  height?: number;
  width?: number;
  swidth?: number; //最好不要变
  children?: React.ReactNode;
  data: number; //百分比
  id?: string; //多个情况，数据不出错
}
export default function index(props: TypePic) {
  const { height = 28, width = 360, swidth = 8, children, data, id } = props;
  const [sca, setSca] = useState(0);
  // 间隙 2px
  let k = 10; //上下间隙,偶数
  let s = height - k + 6; //2边间隙,偶数
  let num = Math.round((width - s) / swidth);
  useEffect(() => {
    setSca((width - s + 6) * data);
  }, [data, width]);
  const PictographCss = styled.div`
    display: flex;
    .title {
      line-height: ${height + 'px'};
      margin-left: 26px;
    //  font-size: 14px;
      font-weight: 400;
    }
    .box {
      height: ${height + 'px'};
      width: ${width + 'px'};
      border: 1px #004c50 solid;
      position: relative;
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        right: ${(s - 8) / 2 + 'px'};
        z-index: 3;
      }
    }
    .block {
      // box-sizing: border-box;
      height: ${height - k + 'px'};
      border: 1px #082432 solid;
      margin-left: 0;
      width: ${swidth + 'px'};
      transform: skewX(30deg);
    }
    .goal {
      height: ${height - k - 4 + 'px'};
      transform: skewX(30deg);
      //width: 470px;
      // background-color: #ed9500;
      position: absolute;
      right: ${(s - 10) / 2 + 'px'};
      top: ${(k + 2) / 2 + 'px'};
      z-index: 2;
      animation: ${'myfirst' + id} 2s 0s;
    }
    .goal-background {
      height: ${height - k - 4 + 'px'};
      transform: skewX(30deg);
      width: ${width - 20 + 'px'};
      background-color: #10384f;
      position: absolute;
      right: ${(s - 8) / 2 + 'px'};
      top: ${(k + 2) / 2 + 'px'};
      z-index: 1;
    }
    @keyframes ${'myfirst' + id} {
      from {
        width: 0;
      }
      to {
        width: ${sca + 'px'};
      }
    }
  `;

  let list: any[] = [];
  for (let i = 0; i <= num; i++) {
    list.push(i);
  }
  return (
    <PictographCss>
      <div className="box">
        <ul>
          {list!.map((i) => {
            return <li className="block" key={i}></li>;
          })}
        </ul>
        <div className="goal-background"></div>
        <div className="goal" style={{ width: sca + 'px', backgroundColor: data > 0.3 ? '#e59001' : '#00f3f3' }}></div>
      </div>
      <div className="title">{children}</div>
    </PictographCss>
  );
}
