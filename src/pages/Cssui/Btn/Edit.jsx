import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { styled } from 'styled-components';
const EditCss = styled.div`
  .light {
    width: 100%;
    height: 100%;
    padding: 10px 0;
    background-color: #edf1f4;
    perspective: 500px;
    --c-wrap-shadow1: #f5f9fd;
    --c-wrap-shadow2: #d8dbe5;
    --c-wrap-bg: #e2e6eb;
    --c-btn-shadow1: #d9dbe6;
    --c-btn-shadow2: #f5f9fd;
    --c-txt1: #aaa;
    --c-txt2: #111;
    transition: background-color 0.4s linear;
    // box-sizing: border-box;
  }
  .dark {
    width: 100%;
    height: 100%;
    padding: 10px 0;
    background-color: #333;
    perspective: 500px;
    --c-wrap-shadow1: #292929;
    --c-wrap-shadow2: #202020;
    --c-wrap-bg: #505050;
    --c-btn-shadow1: #323232;
    --c-btn-shadow2: #444;
    --c-txt1: #888;
    --c-txt2: #fff;
    transition: background-color 0.4s linear;
    //box-sizing: border-box;
  }
  #btnWrapper {
    position: relative;
    width: 380px;
    height: 100px;
    padding: 12px 16px;
    margin: 0 auto 0;
    border-radius: 12px;
    overflow: hidden;
    background-color: var(--c-wrap-bg);
    box-shadow: -10px -10px 15px var(--c-wrap-shadow1), 10px 10px 15px var(--c-wrap-shadow2);
    transform-origin: var(--wraper-origin);
    transition: transform 0.4s cubic-bezier(0, 0, 0.48, 1), box-shadow 0.4s linear, background-color 0.4s linear;
  }
  .rotateWrap {
    transform: rotateY(var(--wraper-rotate));
  }
  #btnWrapper::before {
    content: '';
    position: absolute;
    left: var(--groove-left);
    top: 12px;
    width: calc(50% - 16px - 8px);
    height: calc(100% - 24px);
    border-radius: 12px;
    box-shadow: inset 8px 8px 6px var(--c-btn-shadow1), inset -5px -5px 15px var(--c-btn-shadow2),
      inset -5px -5px 15px var(--c-btn-shadow2), inset 7px 7px 6px var(--c-btn-shadow1);
    transition: left 1s cubic-bezier(0.82, 0.12, 0.18, 0.88), box-shadow 0.4s linear;
  }
  .btn {
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: inherit;
    color: var(--c-txt1);
    transition: color 0.4s linear;
    animation: txtOutScale 0.6s linear;
    cursor: pointer;
  }
  .active {
    color: var(--c-txt2);
    transform: scale(1.1);
    animation: txtEnterScale 0.4s linear;
  }
  @keyframes txtEnterScale {
    0% {
      transform: scale(1);
    }

    80% {
      transform: scale(1.15);
    }

    100% {
      transform: scale(1.1);
    }
  }
  @keyframes txtOutScale {
    0% {
      transform: scale(1.1);
    }

    80% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }
`;
export const Edit = (props) => {
  const [widthVar, setWidthVar] = useState(true);
  const [rotateWrap, setRotateWrap] = useState('');
  const [active, setActive] = useState(true);
  const [page, setPage] = useState(124);
  const someStyle = {
    '--groove-left': widthVar ? '12px' : 'calc(12px + 50%)',
    '--wraper-origin': widthVar ? '75% top' : '25% top',
    '--wraper-rotate': widthVar ? '-8deg' : '8deg',
  };
  const handleClick = (i) => {
    console.log('onclick', i);
    i ? setPage(page - 1) : setPage(page + 1);
    setWidthVar(i);
    setRotateWrap('rotateWrap');
    setTimeout(() => {
      setActive(i);
    }, 350);
    setTimeout(() => {
      setRotateWrap('');
    }, 550);
  };
  return (
    <EditCss className={`table-list`}>
      <div className={`${widthVar ? 'light' : 'dark'}`}>
        <div id="btnWrapper" className={rotateWrap} style={someStyle}>
          <div className={`btn ${active ? 'active' : ''}`} onClick={() => handleClick(true)}>
            开灯
          </div>
          <div className={`btn ${active ? '' : 'active'}`} onClick={() => handleClick(false)}>
            关灯
          </div>
        </div>
        {/* <iframe
          id="leftFrame"
          src={`http://localhost:8080/#/home`}
          //src={`http://localhost:8082/#/echarts`}
          width="100%"
          height="80%"
          name="high"
          frameBorder="0"
        ></iframe> */}
      </div>
    </EditCss>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
