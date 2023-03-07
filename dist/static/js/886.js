"use strict";
(self["webpackChunkuu"] = self["webpackChunkuu"] || []).push([[886],{

/***/ 2240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ HasBtn; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

//按钮权限
function HasBtn(props) {
  var has = props.has,
    children = props.children;
  console.log(children);
  var hasData = function hasData(value) {
    var _localStorage$getItem;
    var isExist = false;
    var buttonPermStr = (_localStorage$getItem = localStorage.getItem("bpc")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : "[]";
    if (buttonPermStr === undefined || buttonPermStr === null) {
      return false;
    }
    var buttonPerms = JSON.parse(buttonPermStr);
    var permissionFlag = value;
    isExist = buttonPerms.some(function (per) {
      return permissionFlag.includes(per);
    });
    return isExist;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasData(has) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, children) : null);
}

/***/ }),

/***/ 5886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Means": function() { return /* binding */ Means; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6706);
/* harmony import */ var react_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6448);
/* harmony import */ var react_antd_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_antd_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HasBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2240);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2787);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9650);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1577);
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6336);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



//import TopSelect from "./component/TopSelect/index";




var ChidlistArr = [{
  title: "类型",
  undisabled: true,
  rule: true,
  controlM: ["storage_code", {
    disable: true,
    ganged: "true"
  }],
  valueName: "plant_code",
  option: {
    "k1": [{
      value: 's1',
      label: '吾皇'
    }],
    "k2": [{
      value: 's1',
      label: '巴扎黑'
    }],
    "k3": [{
      value: 's1',
      label: '卡卡'
    }]
  }
}, {
  title: "视角",
  undisabled: false,
  controlS: true,
  rule: true,
  unplaceholder: 'true',
  valueName: "storage_code",
  option: [{
    value: 'k1',
    label: '12'
  }, {
    value: 'k2',
    label: '88'
  }, {
    value: 'k3',
    label: '66'
  }]
}, {
  //远程搜索数据
  title: "时代",
  undisabled: false,
  rule: false,
  valueName: "material_name",
  showSearch: true,
  showArrow: false,
  filterOption: false,
  onSearch: true
}, {
  title: "名称",
  rule: true,
  undisabled: false,
  valueName: "batch_number",
  type: function type() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      style: {
        width: 270
      }
    });
  }
}];
var Means = function Means(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    fromLoading = _useState2[0],
    setFromLoading = _useState2[1];
  //刷新列表
  var getRefresh = function getRefresh(e) {
    console.log('faafafafa', e);
    console.log("执行了");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "table-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    direction: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_antd_select__WEBPACK_IMPORTED_MODULE_2__.TopSelect, {
    getValue: getRefresh,
    listArr: ChidlistArr
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u4F5C\u4E1A\u521B\u5EFA \uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
    type: "primary",
    loading: fromLoading,
    htmlType: "submit",
    style: {
      width: 130
    }
  }, "\u5BA1\u6838"))))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .connect */ .$j)(mapStateToProps, mapDispatchToProps)(Means));

/***/ })

}]);