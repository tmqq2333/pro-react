"use strict";
(self["webpackChunkuu"] = self["webpackChunkuu"] || []).push([[570],{

/***/ 570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Edit": function() { return /* binding */ Edit; },
  "default": function() { return /* binding */ pages_Edit; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(6706);
;// CONCATENATED MODULE: ./src/pages/scss/edit.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var edit_module = ({"edit":"dISFeWA5CHnkYXu3MibH","txtEnterScale":"jHD8pTc5ETvbpt9c4AKQ","txtOutScale":"aO6AcI4ayOpyaY7L1yS4"});
;// CONCATENATED MODULE: ./src/pages/Edit.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Edit = function Edit(props) {
  var _useState = (0,react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    widthVar = _useState2[0],
    setWidthVar = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    rotateWrap = _useState4[0],
    setRotateWrap = _useState4[1];
  var _useState5 = (0,react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    active = _useState6[0],
    setActive = _useState6[1];
  var _useState7 = (0,react.useState)(124),
    _useState8 = _slicedToArray(_useState7, 2),
    page = _useState8[0],
    setPage = _useState8[1];
  var someStyle = {
    "--groove-left": widthVar ? "12px" : "calc(12px + 50%)",
    "--wraper-origin": widthVar ? "75% top" : "25% top",
    "--wraper-rotate": widthVar ? "-8deg" : "8deg"
  };
  var handleClick = function handleClick(i) {
    console.log('onclick', i);
    i ? setPage(page - 1) : setPage(page + 1);
    setWidthVar(i);
    setRotateWrap("rotateWrap");
    setTimeout(function () {
      setActive(i);
    }, 350);
    setTimeout(function () {
      setRotateWrap("");
    }, 550);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "table-list ".concat(edit_module.edit)
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(widthVar ? "light" : "dark")
  }, /*#__PURE__*/react.createElement("div", {
    id: "btnWrapper",
    className: rotateWrap,
    style: someStyle
  }, /*#__PURE__*/react.createElement("div", {
    className: "btn ".concat(active ? "active" : ""),
    onClick: function onClick() {
      return handleClick(true);
    }
  }, "\u5F00\u706F"), /*#__PURE__*/react.createElement("div", {
    className: "btn ".concat(active ? "" : "active"),
    onClick: function onClick() {
      return handleClick(false);
    }
  }, "\u5173\u706F"))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = {};
/* harmony default export */ var pages_Edit = ((0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps)(Edit));

/***/ })

}]);