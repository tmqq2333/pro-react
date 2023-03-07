"use strict";
(self["webpackChunkuu"] = self["webpackChunkuu"] || []).push([[17],{

/***/ 5042:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Statistics; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(233);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Statistics() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    rateOption = _useState2[0],
    setRateOption = _useState2[1];
  var dom = [];
  for (var i = 0; i < 8; i++) {
    dom.push( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)());
  }
  var setOption = function setOption() {
    var option = {
      backgroundColor: "#0d073d",
      tooltip: {
        trigger: "item"
      },
      title: [{
        text: "周转率",
        textStyle: {
          color: "#22ac38",
          fontSize: 35
        },
        itemGap: 20,
        left: "40%",
        top: "40%"
      }],
      legend: {
        top: "5%",
        left: "center",
        show: false
      },
      polar: [{
        center: ["50%", "50%"],
        //中心点位置
        radius: ["68%", "82%"] //图形大小
      }],

      angleAxis: {
        polarIndex: 0,
        min: 0,
        max: 100,
        show: false,
        // boundaryGap: ['40%', '40%'],
        startAngle: 90
      },
      radiusAxis: {
        type: "category",
        show: false,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: [{
        type: "bar",
        z: 10,
        name: "周转率",
        data: [60],
        coordinateSystem: "polar",
        roundCap: true,
        // 是否圆角
        barWidth: 32,
        //大的占比环
        itemStyle: {
          opacity: 1,
          // color: "#14d88e"
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: "#2da178" // 0% 处的颜色
            }, {
              offset: 1,
              color: "rgba(232, 248, 243, 0.3)" // 100% 处的颜色
            }],

            global: false // 缺省为 false
          }
        }
      }, {
        type: "pie",
        name: "内层细圆环",
        radius: ["80%", "70%"],
        center: ["50%", "50%"],
        //中心点位置
        startAngle: 99,
        clockwise: true,
        silent: true,
        itemStyle: {
          color: "#f3f3f7",
          opacity: 0.3
        },
        tooltip: {
          show: false
        },
        label: {
          show: false
        },
        data: [100]
      }]
    };
    var myChart = echarts__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1(dom[0].current);
    myChart.setOption(option);
    function random() {
      return +(Math.random() * 100).toFixed(1);
    }
    setInterval(function () {
      var dynamicData = [random()];
      myChart.setOption({
        series: [{
          data: dynamicData.slice()
        }, {
          data: [100]
        }]
      });
    }, 3000);
  };
  var setColumn = function setColumn() {
    var data_X = ["第一", "第二", "第三", "第四", "第五", "第六"];
    var data_Y = [10, 20, 30, 5, 40, 60];
    var TopColor = ["rgba(232, 255, 20,1)", "rgba(12, 255, 255, 1)", "rgba(30, 255, 254, 1)", "rgba(255,255,255,1)", "rgba(50,255,45,1)", "rgba(194,80,56,1)"];
    var RightColor = ["rgba(232, 197, 11,0.6)", "rgba(12, 215, 226, 0.6)", "rgba(30, 170, 254, 0.6)", "rgba(255,255,255,0.6)", "rgba(0,0,45,0.6)", "rgba(194,53,49,0.6)"];
    var barTopColor = ["rgba(232, 197, 11,1)", "rgba(12, 215, 226, 1)", "rgba(30, 170, 254, 1)", "rgba(255,255,255,1)", "#3fa280", "rgba(194,53,49,1)"];
    var barBottomColor = ["rgba(232, 197, 11,0)", "rgba(12, 215, 226, 0)", "rgba(30, 170, 254, 0)", "rgba(255,255,255,0)", "rgba(0,0,45,0)", "rgba(194,53,49, 0)"];
    var option = {
      backgroundColor: "#0d073d",
      tooltip: {
        show: true
      },
      grid: {
        top: "15%",
        bottom: "20%",
        left: "13%",
        right: "3%"
      },
      axisPointer: {
        // show: false,
        link: {
          xAxisIndex: "all"
        },
        type: "shadow",
        label: {
          backgroundColor: "#777"
        }
      },
      xAxis: {
        data: data_X,
        axisTick: {
          show: false
        },
        axisLine: {
          // show: false,
          symbol: ["none"],
          symbolSize: [10, 17],
          lineStyle: {
            color: "#00ffff",
            width: 0 //  改变坐标线的颜色
          }
        },

        axisLabel: {
          show: true,
          interval: 0,
          // rotate: -30,
          margin: 25,
          align: "center",
          textStyle: {
            fontSize: 12,
            color: "#00ffff"
          }
        }
      },
      yAxis: {
        splitLine: {
          // show: false,

          lineStyle: {
            color: "#00ffff",
            type: "dashed",
            opacity: 0.4
          }
        },
        // axisTick: {
        //   show: false,
        // },
        axisLine: {
          // show: false,
          lineStyle: {
            color: "#00ffff"
          }
        }
        // axisLabel: {
        //   show: false,
        // },
      },

      series: [{
        name: "柱顶部",
        type: "pictorialBar",
        symbol: "diamond",
        symbolSize: [36, 10],
        // [36, 10],
        symbolOffset: [0, -4.5],
        // [0, -5]
        z: 20,
        // borderColor:'#000',
        // borderWidth:0.1,
        itemStyle: {
          normal: {
            color: function color(params) {
              return TopColor[params.dataIndex];
            }
          }
        },
        label: {
          show: true,
          position: "top",
          fontSize: 20,
          fontFamily: "tenxu",
          formatter: "{c}"
        },
        symbolPosition: "end",
        data: data_Y
      }, {
        name: "柱底部",
        type: "pictorialBar",
        symbol: "none",
        symbolSize: [26, 10],
        // [36, 10]
        symbolOffset: [0, 5],
        // [0, 5]
        z: 12,
        itemStyle: {
          normal: {
            color: function color(params) {
              return barTopColor[params.dataIndex];
            }
          }
        },
        data: data_Y
      }, {
        type: "bar",
        itemStyle: {
          normal: {
            // 中间柱子渐变色
            color: function color(params) {
              return new echarts__WEBPACK_IMPORTED_MODULE_1__/* .graphic.LinearGradient */ .Q.o(0, 0, 0, 1, [{
                offset: 0,
                color: barTopColor[params.dataIndex]
              }, {
                offset: 1,
                color: barBottomColor[params.dataIndex]
              }]);
            },
            barBorderRadius: [4, 0, 0, 100]
          }
        },
        z: 16,
        silent: true,
        barWidth: 18,
        barGap: "-100%",
        // Make series be overlap
        data: data_Y
      }, {
        tooltip: {
          show: true
        },
        type: "bar",
        barWidth: 18,
        // barCategoryGap:'60%',
        itemStyle: {
          //右面
          normal: {
            color: function color(params) {
              return new echarts__WEBPACK_IMPORTED_MODULE_1__/* .graphic.LinearGradient */ .Q.o(0, 0, 0, 1, [{
                offset: 0,
                color: RightColor[params.dataIndex]
              }, {
                offset: 1,
                color: barBottomColor[params.dataIndex]
              }]);
            },
            borderWidth: 0.1,
            barBorderRadius: [0, 5, 100, 0]
          }
        },
        data: data_Y,
        barGap: 0
      }],
      animationDuration: 0,
      animationDurationUpdate: 1000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };
    var myChart = echarts__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1(dom[1].current);
    myChart.setOption(option);
    function random() {
      return +(Math.random() * 1000).toFixed(1);
    }
    setInterval(function () {
      var dynamicData = [random(), random(), random(), random(), random(), random()];
      myChart.setOption({
        series: [{
          data: dynamicData.slice()
        }, {
          data: dynamicData.slice()
        }, {
          data: dynamicData.slice()
        }, {
          data: dynamicData.slice()
        }]
      });
    }, 3000);
  };
  var setBar = function setBar() {
    var category = ["服务器数", "计算容量", "内存容量", "存储容量"];
    // var barData = [
    //   0,
    //   ~~(Math.random() * 100),
    //   ~~(Math.random() * 100),
    //   ~~(Math.random() * 100),
    //   ~~(Math.random() * 100),
    // ];
    var maxData = 100;
    var barData = [6, 6, 1, 0.3];
    var lineData = [7, 10, 10, 10, 10];
    var option = {
      backgroundColor: "#0d073d",
      //背景色
      grid: [{
        //图形的位置
        left: "10%",
        bottom: "20%",
        top: 3,
        right: "20%"
      }],
      tooltip: {},
      xAxis: {
        max: maxData,
        splitLine: {
          show: false
        },
        offset: 10,
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        },
        axisLabel: {
          margin: 10
        }
      },
      yAxis: {
        data: ["2013", "2014", "2015", "2016"],
        inverse: true,
        //反向放置
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          margin: 10,
          color: "#999",
          fontSize: 16
        }
      },
      series: [{
        // current data
        type: "pictorialBar",
        symbol: "rect",
        symbolRepeat: "fixed",
        symbolMargin: "10%",
        symbolClip: true,
        symbolSize: [10, 30],
        symbolBoundingData: maxData,
        data: [20, 20, 60, 70],
        itemStyle: {
          normal: {
            // barMaxWidth: "20%",
            // barBorderRadius: 100,
            color: "#6DE8FA"
          }
        },
        label: {
          show: true,
          formatter: function formatter(params) {
            return (params.value / maxData * 100).toFixed(1) + " %";
          },
          position: "right",
          offset: [10, 0],
          color: "#8cdcfe",
          fontSize: 18
        },
        markLine: {
          symbol: "none",
          label: {
            formatter: "max: {c}",
            position: "start"
          },
          lineStyle: {
            color: "green",
            type: "dotted",
            opacity: 0.2,
            width: 2
          },
          data: [{
            type: "max"
          }]
        },
        z: 10
      }, {
        // full data
        tooltip: {
          show: false
        },
        type: "pictorialBar",
        animationDuration: 0,
        symbolRepeat: "fixed",
        symbolMargin: "10%",
        symbol: "rect",
        symbolSize: [10, 30],
        symbolBoundingData: maxData,
        data: [maxData, maxData, maxData, maxData],
        z: 5
      }],
      animationDuration: 0,
      animationDurationUpdate: 1000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };
    var myChart = echarts__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1(dom[2].current);
    myChart.setOption(option);
    // Make dynamic data.
    function random() {
      return +(Math.random() * (maxData - 10)).toFixed(1);
    }
    setInterval(function () {
      var dynamicData = [random(), random(), random(), random()];
      myChart.setOption({
        series: [{
          data: dynamicData.slice()
        }, {
          data: [maxData, maxData, maxData, maxData]
        }]
      });
    }, 3000);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOption();
    setColumn();
    setBar();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "table-list home-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: dom[0],
    style: {
      width: "100%",
      height: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: dom[1],
    style: {
      width: "100%",
      height: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: dom[2],
    style: {
      width: "100%",
      height: "100%"
    }
  }));
}

/***/ })

}]);