"use strict";
(self["webpackChunkuu"] = self["webpackChunkuu"] || []).push([[934],{

/***/ 6934:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(233);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6706);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var List = function List(props) {
  var eyeball = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  // const [leep, setLeep] = useState(false);
  // const [sleep, setSleep] = useState(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("eyeSocketSleeping"),
    _useState2 = _slicedToArray(_useState, 2),
    weakup = _useState2[0],
    setWeakup = _useState2[1]; //休息：eyeSocketSleeping 醒来：eyeSocketLooking
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      eyeXDeg: 0,
      eyeYDeg: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    opt = _useState4[0],
    setOpt = _useState4[1];
  var eyeballChart;
  var leftRotSize = 0; // 旋转角度
  var ballSize = 0; // 眼睛尺寸
  var ballColor = "transparent";
  var rotTimer; // 定时器
  var sleepTimer; //延时器
  var someStyle = {
    "--c-eyeSocket": sleep() ? "rgb(255,187,255)" : "rgb(41, 104, 217)",
    "--c-eyeSocket-outer": sleep() ? "rgb(238,85,135)" : "#02ffff",
    "--c-eyeSocket-outer-shadow": sleep() ? "rgb(255, 60, 86)" : "transparent",
    "--c-eyeSocket-inner": sleep() ? "rgb(208,14,74)" : "rgb(35, 22, 140)"
  };
  function sleep() {
    if (weakup === "eyeSocketLooking") return true;else return false;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    eyeballChart = echarts__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1(eyeball.current); // 初始化画布
    getEyeballChart(); //初始化眼睛

    // toSleep()
    return function () {
      clearTimeout(sleepTimer);
      clearInterval(rotTimer); // 清除定时器
    };
  }, []);
  function getEyeballChart() {
    eyeballChart.setOption({
      series: [{
        type: "gauge",
        // 使用仪表盘类型
        radius: "8",
        // 采用负数是为了让分割线从内向外延伸
        clockwise: false,
        startAngle: "".concat(0 + leftRotSize * 5),
        // 加为逆时针旋转，乘5表示速度为leftRotSize的倍
        endAngle: "".concat(360 + leftRotSize * 5),
        splitNumber: 9,
        // 分割数量，会将270度分割为3份，所以有四根线
        detail: false,
        axisLine: {
          show: false
        },
        axisTick: false,
        splitLine: {
          show: true,
          length: ballSize,
          // 分割线高度设置为眼球尺寸变量
          lineStyle: {
            shadowColor: ballColor,
            // 把眼睛的眼影颜色设为变量控制
            color: ballColor,
            shadowBlur: 20,
            // 阴影渐变
            // shadowColor: "rgb(0, 238, 255)", // 阴影颜色
            shadowOffsetY: "0",
            //color: "rgb(0, 238, 255)", // 分割线颜色
            width: 3 // 分割线宽度
          }
        },

        axisLabel: false
      }]
    });
  }
  function toSleep() {
    clearInterval(rotTimer); // 清除定时器
    rotTimer = setInterval(function () {
      getEyeballChart();
      if (ballSize > 0) {
        ballSize -= 0.1; // 当眼球存在时慢慢减小
        leftRotSize === 360 ? leftRotSize = 0 : leftRotSize += 0.1; // 旋转，
      } else {
        // setSleep(false)
        setWeakup("eyeSocketSleeping");
        clearInterval(rotTimer); //重点，取消定时器。不然休眠后唤醒有问题
      }
    }, 10);
    document.body.removeEventListener("mousemove", focusOnMouse);
    setOpt({
      eyeXDeg: 0,
      eyeYDeg: 0
    });
  }
  var onclickToWeakup = function onclickToWeakup() {
    // if (leep||sleep) return;
    if (weakup !== "eyeSocketSleeping") return;
    clearTimeout(sleepTimer);
    clearInterval(rotTimer); // 清除定时器
    // 只有第一次点击存在，再次点击eyeballChart会为空,【未解决:考虑为echarts原因】
    if (!eyeballChart) {
      eyeballChart = echarts__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1(eyeball.current);
    }
    console.log(eyeballChart);
    // setSleep(false)
    // setLeep(true);
    setWeakup("eyeSocketLooking");
    ballColor = "rgb(208,14,74)";
    rotTimer = setInterval(function () {
      ballSize <= 50 && ballSize++;
      leftRotSize === 360 ? leftRotSize = 0 : leftRotSize = leftRotSize + 0.5;
      getEyeballChart();
    }, 10);
    setTimeout(function () {
      adjust();
      document.body.addEventListener("mousemove", focusOnMouse);
    }, 3000);
  };
  //调整状态
  function adjust() {
    new Promise(function (res) {
      clearInterval(rotTimer); // 清除定时器
      rotTimer = setInterval(function () {
        getEyeballChart(); // 更新视图
        ballSize > 0 && (ballSize -= 0.5); // 眼球尺寸减小
        leftRotSize === 360 ? leftRotSize = 0 : leftRotSize += 0.1;
        if (ballSize === 0) {
          // 当眼球尺寸为0时，将Promise标记为resolved，然后执行后面的代码
          clearInterval(rotTimer);
          res();
        }
      }, 10);
    }).then(function () {
      // setSleep(true)
      // setLeep(false); // 设置常态样式
      setWeakup("");
      ballColor = "rgb(0,238,255)";
      rotTimer = setInterval(function () {
        getEyeballChart();
        ballSize <= 12 && (ballSize += 0.1); // 眼球尺寸缓慢增加
        leftRotSize === 360 ? leftRotSize = 0 : leftRotSize += 0.1;
      }, 10);
    });
  }
  //工作状态
  function focusOnMouse(e) {
    {
      // 视口尺寸，获取到整个视口的大小
      var clientWidth = window.innerWidth;
      var clientHeight = window.innerHeight;
      // 原点，即bigEye中心位置，页面中心
      var origin = [clientWidth / 2, clientHeight / 2];
      // 鼠标坐标
      var mouseCoords = [e.clientX - origin[0], origin[1] - e.clientY];
      // // 旋转角度
      var eyeXDeg = mouseCoords[1] / clientHeight * 80; // 这里的80代表的是最上下边缘大眼X轴旋转角度
      var eyeYDeg = mouseCoords[0] / clientWidth * 60;
      setOpt({
        eyeXDeg: eyeXDeg,
        eyeYDeg: eyeYDeg
      });
      if (sleepTimer) clearTimeout(sleepTimer);
      sleepTimer = setTimeout(function () {
        toSleep();
      }, 10000);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "table-list home-list",
    style: someStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "eyeSocket ".concat(weakup),
    style: {
      transform: "rotateY(".concat(opt.eyeYDeg, "deg) rotateX(").concat(opt.eyeXDeg, "deg)")
    },
    onClick: onclickToWeakup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: eyeball,
    style: {
      height: "100%",
      width: "100%",
      transform: "translate(".concat(opt.eyeYDeg / 1.5, "px, ").concat(-opt.eyeXDeg / 1.5, "px)")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "eyeSocket ".concat(weakup),
    id: "eyeFilter",
    onClick: onclickToWeakup,
    style: {
      opacity: sleep() ? "1" : "0"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
    id: "filterl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feTurbulence", {
    baseFrequency: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", {
    id: "animate1",
    attributeName: "baseFrequency",
    dur: "1s",
    from: "0.5",
    to: "0.55",
    begin: "0s;animate1.end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", {
    id: "animate2",
    attributeName: "baseFrequency",
    dur: "1s",
    from: "0.55",
    to: "0.5",
    begin: "animate2.end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    scale: "55",
    xChannelSelector: "R",
    yChannelSelector: "B"
  }))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .connect */ .$j)(mapStateToProps, mapDispatchToProps)(List));

/***/ })

}]);