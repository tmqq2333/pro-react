//公共样式
import styled from 'styled-components';
const Nofound = styled.div`
  background: #fff;
  margin-top: -20px;
  height: '100%';
  .wscn-http404 {
    position: relative;
    width: 1200px;
    margin: 20px auto 60px;
    padding: 0 100px;
    overflow: hidden;
    .pic-404 {
      position: relative;
      float: left;
      width: 600px;
      padding: 150px 0;
      overflow: hidden;
      &__parent {
        width: 100%;
      }
      &__child {
        position: absolute;
        &.left {
          width: 80px;
          top: 17px;
          left: 220px;
          opacity: 0;
          animation-name: cloudLeft;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }
        &.mid {
          width: 46px;
          top: 10px;
          left: 420px;
          opacity: 0;
          animation-name: cloudMid;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1.2s;
        }
        &.right {
          width: 62px;
          top: 100px;
          left: 500px;
          opacity: 0;
          animation-name: cloudRight;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }
        @keyframes cloudLeft {
          0% {
            top: 17px;
            left: 220px;
            opacity: 0;
          }
          20% {
            top: 33px;
            left: 188px;
            opacity: 1;
          }
          80% {
            top: 81px;
            left: 92px;
            opacity: 1;
          }
          100% {
            top: 97px;
            left: 60px;
            opacity: 0;
          }
        }
        @keyframes cloudMid {
          0% {
            top: 10px;
            left: 420px;
            opacity: 0;
          }
          20% {
            top: 40px;
            left: 360px;
            opacity: 1;
          }
          70% {
            top: 130px;
            left: 180px;
            opacity: 1;
          }
          100% {
            top: 160px;
            left: 120px;
            opacity: 0;
          }
        }
        @keyframes cloudRight {
          0% {
            top: 100px;
            left: 500px;
            opacity: 0;
          }
          20% {
            top: 120px;
            left: 460px;
            opacity: 1;
          }
          80% {
            top: 180px;
            left: 340px;
            opacity: 1;
          }
          100% {
            top: 200px;
            left: 300px;
            opacity: 0;
          }
        }
      }
    }
    .bullshit {
      position: relative;
      float: left;
      width: 300px;
      padding: 150px 0;
      overflow: hidden;
      &__oops {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 20px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
      &__headline {
        font-size: 20px;
        line-height: 24px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 10px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
      }
      &__info {
        font-size: 13px;
        line-height: 21px;
        color: grey;
        opacity: 0;
        margin-bottom: 30px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }
      &__return-home {
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        background: #1482f0;
        border-radius: 100px;
        text-align: center;
        color: #ffffff;
        opacity: 0;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }
      @keyframes slideUp {
        0% {
          transform: translateY(60px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
`;
const fontcolor = '#fff';
const Wrapper = styled.div`
  background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    line-height: 60px;
    letter-spacing: 5px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
  }
  .img-box {
    text-align: center;
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      // background:url('../../assets/login.jpg') no-repeat;
      // background-size: 100%;
      overflow: hidden;
      box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
      transition: 0.5s;
    }
  }
  .text-span {
    line-height: 60px;
    color: #fff;
    display: block;
    text-align: center;
    &:hover {
      color: #f6c0d7;
    }
  }
  .boxlog {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    //padding: 40px 0;
  }
  .login_pre {
    width: 449px;
    height: 420px;
    z-index: 2;
    align-items: center;
    border-radius: 4px;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 1px;
    top: 0;
    transition: 0.5s ease-in-out;
  }
  .login_box {
    width: 900px;
    height: 422px;
    position: relative;
    border-radius: 4px;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    border: 1px solid rgba($color: #fff, $alpha: 0.6);
    justify-content: space-around;
    &_r {
      width: 320px;
    }
  }
  .ant-form-item-label > label,
  .ant-checkbox-wrapper {
    color: #ffffff;
  }
`;
const Container = styled.div`
  background-color: rgb(255, 255, 255);
  height: 100%;
  overflow-y: auto;
  .topbox {
    flex: 0 0 42px;
    padding: 10px;
    display: flex;
  }
`;
export { Wrapper, Nofound, Container };
