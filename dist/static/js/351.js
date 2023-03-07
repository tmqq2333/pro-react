"use strict";
(self["webpackChunkuu"] = self["webpackChunkuu"] || []).push([[351],{

/***/ 1351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Drag; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/pages/scss/drag.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var drag_module = ({"drag":"oo4YMCZwK9GPgerzndwE"});
;// CONCATENATED MODULE: ./src/pages/Drag.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Drag() {
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isactive = _useState2[0],
    setIsactive = _useState2[1];
  var dragging = false;
  var cloneEl = null; // 克隆元素
  var initial = {}; // 初始化数据记录
  var queue = [];
  var imgList = [{
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }, {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100"
  }];
  (0,react.useEffect)(function () {
    document.getElementById("list").addEventListener("mousedown", down);
    document.getElementById("list").addEventListener("touchstart", down);
    document.getElementById("content").addEventListener("mousedown", downCont);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    document.getElementById("content").addEventListener("touchend", goalUp);
    document.getElementById("content").addEventListener("mouseup", goalUp);
    // 鼠标抬起
    window.addEventListener("mouseup", undoUp);
    window.addEventListener("touchend", undoUp);
    // 鼠标离开了视窗
    document.addEventListener("mouseleave", function (e) {
      end();
    });
    // 用户可能离开了浏览器
    window.onblur = function () {
      end();
    };
  }, []);
  // 结束处理（动画）
  function end() {
    dragging = false;
    if (!cloneEl) {
      return;
    }
    cloneEl.classList.add("is_return");
    changeStyle(["left: ".concat(initial.pageX - initial.offsetX, "px"), "top: ".concat(initial.pageY - initial.offsetY, "px"), "transform: scale(1)"]);
    setTimeout(function () {
      queue.length && queue.shift()();
      cloneEl && cloneEl.remove();
      cloneEl = null;
    }, 300);
  }
  // 按下鼠标
  function down(e) {
    e.preventDefault();
    if (e.target.classList.contains("item") && !cloneEl) {
      // document.getElementById("app").classList.add("active");
      // setIsactive(true);
      // 选中了元素
      cloneEl = e.target.cloneNode(true);
      cloneEl.classList.add("flutter");
      // 模拟一个随机大小的"原图"，实际业务中不存在
      var fakeSize = parseInt(100 * randomNum(3, 5));
      // 初始化数据
      init(e, {
        width: e.target.offsetWidth
      }, fakeSize, Math.random());
      // 加载"原图"
      simulate(cloneEl.src.replace(/w=100/g, "w=" + fakeSize), initial.flag);
      e.target.parentElement.appendChild(cloneEl);
      dragging = true;
      e.target.classList.add("hide"); // 放在最后
      queue.push(function () {
        e.target.classList.remove("hide");
      });
    }
  }
  function downCont(e) {
    e.preventDefault();
    if (e.target.classList.contains("item") && !cloneEl) {
      // document.getElementById("app").classList.add("active");
      setIsactive(true);
      // 选中了元素

      cloneEl = e.target.cloneNode(true);
      cloneEl.classList.add("flutter");
      cloneEl.classList.add("cont");
      // 模拟一个随机大小的"原图"，实际业务中不存在
      //const fakeSize = parseInt(100 * randomNum(3, 5));
      var fakeSize = e.target.offsetWidth;
      // 初始化数据
      init(e, {
        width: e.target.offsetWidth
      }, fakeSize, Math.random());
      // 加载"原图"
      simulate(cloneEl.src.replace(/w=100/g, "w=" + fakeSize), initial.flag);
      e.target.parentElement.appendChild(cloneEl);
      dragging = true;
      e.target.classList.add("hide"); // 放在最后
      queue.push(function () {
        e.target.classList.remove("hide");
        e.target.remove();
      });
    }
  }
  //鼠标移动
  function move(e) {
    if (!e.touches) {
      //兼容移动端
      var x = e.pageX;
      var y = e.pageY;
    } else {
      //兼容PC端
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
    }
    if (dragging && cloneEl) {
      moveFlutter(x - initial.offsetX, y - initial.offsetY, distance(e));
    }
  }
  //到达目的松开
  function goalUp(e) {
    if (e.target.id !== "content") {
      var lostX = e.x - document.getElementById("content").getBoundingClientRect().left;
      var lostY = e.y - document.getElementById("content").getBoundingClientRect().top;
      done(lostX, lostY);
    } else {
      done(e.offsetX, e.offsetY);
    }
  }
  function undoUp(e) {
    dragging = false;
    setIsactive(false);
    setTimeout(function () {
      end();
    }, 10);
  }
  // 完成处理
  function done(x, y) {
    if (!cloneEl) {
      return;
    }
    var newEl = cloneEl.cloneNode(true);
    newEl.classList.remove("flutter");
    newEl.src = cloneEl.getAttribute("raw");
    newEl.style.cssText = "left: ".concat(x - initial.offsetX, "px; top: ").concat(y - initial.offsetY, "px;");
    document.getElementById("content").appendChild(newEl);
    cloneEl.remove();
    cloneEl = null;
    queue.length && queue.shift()();
  }
  // 改变漂浮元素（合并多个操作）
  function moveFlutter(x, y) {
    var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // const scale = null // TODO: 关闭缩放
    var scale = d ? initial.width + d <= initial.fakeSize ? "transform: scale(".concat((initial.width + d) / initial.width, ")") : null : null;
    var options;
    if (cloneEl.classList.contains("cont")) {
      //左右侧漂浮元素针对的父元素不同，位置也会不同。
      options = ["left: ".concat(x - 525, "px"), "top: ".concat(y - 112, "px")];
    } else {
      options = ["left: ".concat(x, "px"), "top: ".concat(y, "px")]; //左侧
    }

    scale && options.push(scale);
    changeStyle(options);
  }
  function changeStyle(arr) {
    var original = cloneEl.style.cssText.split(";");
    original.pop();
    cloneEl.style.cssText = original.concat(arr).join(";") + ";";
  }
  // 记录鼠标初始化事件
  function init(_ref, _ref2, fakeSize, flag) {
    var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY,
      pageX = _ref.pageX,
      pageY = _ref.pageY;
    var width = _ref2.width;
    initial = {
      offsetX: offsetX,
      offsetY: offsetY,
      pageX: pageX,
      pageY: pageY,
      width: width,
      fakeSize: fakeSize,
      flag: flag
    };
    moveFlutter(pageX - offsetX, pageY - offsetY);
  }
  // 计算两点之间距离
  function distance(_ref3) {
    var pageX = _ref3.pageX,
      pageY = _ref3.pageY;
    var _initial = initial,
      x = _initial.pageX,
      y = _initial.pageY;
    var b = pageX - x;
    var a = pageY - y;
    return Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));
  }
  // 加载原图通常需要时间，利用缓存来优化卡顿
  function simulate(url, flag) {
    cloneEl.setAttribute("raw", url);
    var image = new Image();
    image.src = url;
    image.onload = function () {
      // 异步任务，克隆节点可能会先被清理
      cloneEl && initial.flag === flag && (cloneEl.src = url);
    };
  }
  function randomNum(n, m) {
    return Math.random() * (m - n) + n;
  }
  return /*#__PURE__*/react.createElement("div", {
    id: "app",
    className: "table-list ".concat(drag_module.drag, " ").concat(isactive ? "active" : "")
  }, /*#__PURE__*/react.createElement("div", {
    className: "slide"
  }, /*#__PURE__*/react.createElement("div", {
    id: "list",
    className: "grid"
  }, imgList.map(function (v, i) {
    return /*#__PURE__*/react.createElement("img", {
      key: i,
      className: "item",
      src: v.src
    });
  }))), /*#__PURE__*/react.createElement("div", {
    id: "content"
  }));
}

/***/ })

}]);