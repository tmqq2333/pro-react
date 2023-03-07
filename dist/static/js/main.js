/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": function() { return /* binding */ getPassword; }
});

// UNUSED EXPORTS: postPassword

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(2861);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__(5360);
;// CONCATENATED MODULE: ./src/config/service.js


var isDev = "production" === "development";
var service = axios/* default.create */.Z.create({
  baseURL: isDev ? "" : "/pro-react/dist",
  //所有的请求都会 带上/api
  "content-type": "application/json",
  timeout: 5000
});
//请求拦截器
service.interceptors.request.use(
//可配置是否需要带上token访问
function (config) {
  config.headers.authorization = localStorage.getItem("token") || "";
  return config;
}, function (error) {
  return Promise.reject(error);
});
//响应拦截器
service.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  // 相应错误处理
  // 比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
  switch (error.response.status) {
    case 401:
      break;
    case 403:
      break;
    case 404:
      message/* default.error */.ZP.error("接口地址不存在");
      break;
    case 500:
      message/* default.error */.ZP.error("服务器错误");
      break;
    default:
      message/* default.error */.ZP.error('其他错误信息');
  }
  return Promise.reject(error);
});
function service_request(config) {
  var _config$url = config.url,
    url = _config$url === void 0 ? "" : _config$url,
    _config$method = config.method,
    method = _config$method === void 0 ? "GET" : _config$method,
    _config$data = config.data,
    data = _config$data === void 0 ? {} : _config$data,
    _config$headers = config.headers,
    headers = _config$headers === void 0 ? {} : _config$headers;
  switch (method.toUpperCase()) {
    case "GET":
      return service.get(url, {
        params: data
      });
    case "POST":
      //原生的 form 表单
      if (headers["content-type"] === "application/x-www-form-url-encoded") {
        var p = new URLSearchParams();
        for (var key in data) {
          p.append(key, data[key]);
        }
        return service.post(url, p, {
          headers: headers
        });
      }
      //提交文件、非 ASCII 码的数据或者是二进制流数据
      if (headers["content-type"] === "multipart/form-data") {
        var _p = new FormData();
        for (var _key in data) {
          _p.append(_key, data[_key]);
        }
        return service.post(url, _p, {
          headers: headers
        });
      }
      //json格式，嵌套较深
      return service.post(url, data);
    case "PUT":
      // 修改数据
      return service.put(url, data);
    case "DELETE":
      // 删除数据
      return service.delete(url, {
        data: data
      });
    case "PATCH":
      // 更新局部资源
      return service.patch(url, data);
    default:
      return service(config);
  }
}
;// CONCATENATED MODULE: ./src/api/user.js

function getPassword(data) {
  return service_request({
    method: "GET",
    url: "/data.json",
    data: data
  });
}
function postPassword(data) {
  return request({
    method: "POST",
    url: "/data.json",
    data: data
  });
}

/***/ }),

/***/ 3215:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(6706);
// EXTERNAL MODULE: ./src/api/user.js + 1 modules
var user = __webpack_require__(6336);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/AreaChartOutlined.js + 1 modules
var AreaChartOutlined = __webpack_require__(7448);
;// CONCATENATED MODULE: ./src/router/menus.js


var menus = [{
  key: "0-0",
  path: "/list",
  title: "系统首页",
  icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
  component: /*#__PURE__*/react.lazy(function () {
    return Promise.all(/* import() */[__webpack_require__.e(233), __webpack_require__.e(934)]).then(__webpack_require__.bind(__webpack_require__, 6934));
  })
}, {
  key: "0-1",
  path: "/edit",
  title: "修改",
  icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
  children: [{
    key: "0-1-0",
    path: "/edit/car",
    title: "文章修改",
    icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
    children: [{
      key: "0-1-0-0",
      path: "",
      title: "列表",
      hidden: true,
      icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
      component: /*#__PURE__*/react.lazy(function () {
        return __webpack_require__.e(/* import() */ 570).then(__webpack_require__.bind(__webpack_require__, 570));
      })
    }, {
      key: "0-1-0-1",
      path: "/edit/car/add",
      title: "新增",
      hidden: true,
      icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
      component: /*#__PURE__*/react.lazy(function () {
        return __webpack_require__.e(/* import() */ 570).then(__webpack_require__.bind(__webpack_require__, 570));
      })
    }]
  }, {
    key: "0-1-1",
    path: "/edit/means",
    title: "文章发布",
    icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
    component: /*#__PURE__*/react.lazy(function () {
      return Promise.all(/* import() */[__webpack_require__.e(648), __webpack_require__.e(448), __webpack_require__.e(886)]).then(__webpack_require__.bind(__webpack_require__, 5886));
    })
  }, {
    key: "0-1-2",
    path: "/edit/look",
    title: "文章库",
    icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
    component: /*#__PURE__*/react.lazy(function () {
      return Promise.all(/* import() */[__webpack_require__.e(648), __webpack_require__.e(462)]).then(__webpack_require__.bind(__webpack_require__, 462));
    })
  }]
}, {
  key: "0-2",
  path: "/means",
  title: "资料",
  icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
  component: /*#__PURE__*/react.lazy(function () {
    return Promise.all(/* import() */[__webpack_require__.e(648), __webpack_require__.e(448), __webpack_require__.e(886)]).then(__webpack_require__.bind(__webpack_require__, 5886));
  }),
  children: [{
    key: "0-2-2",
    path: "/means/df",
    title: "资料修改",
    icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
    component: /*#__PURE__*/react.lazy(function () {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2072));
    })
  }]
}, {
  key: "0-3",
  path: "/statistics",
  title: "统计",
  icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
  component: /*#__PURE__*/react.lazy(function () {
    return Promise.all(/* import() */[__webpack_require__.e(233), __webpack_require__.e(17)]).then(__webpack_require__.bind(__webpack_require__, 5042));
  })
}, {
  key: "0-4",
  path: "/work",
  title: "功能",
  icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
  children: [{
    key: "0-4-0",
    path: "/work/drag",
    title: "拖拽",
    icon: /*#__PURE__*/react.createElement(AreaChartOutlined/* default */.Z, null),
    component: /*#__PURE__*/react.lazy(function () {
      return __webpack_require__.e(/* import() */ 351).then(__webpack_require__.bind(__webpack_require__, 1351));
    })
  }]
}];
/* harmony default export */ var router_menus = (menus);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SmileOutlined.js + 1 modules
var SmileOutlined = __webpack_require__(8613);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(7254);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 11 modules
var es_menu = __webpack_require__(8505);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__(5360);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(3013);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(9650);
;// CONCATENATED MODULE: ./src/assets/defaultImg.jpg
var defaultImg_namespaceObject = __webpack_require__.p + "static/images/407040050b8382e34c31.jpg";
;// CONCATENATED MODULE: ./src/assets/logo.jpg
var logo_namespaceObject = "data:image/jpeg;base64,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";
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__(4041);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(7207);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(1577);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(385);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(2787);
// EXTERNAL MODULE: ./node_modules/antd/es/tree/index.js + 10 modules
var tree = __webpack_require__(2363);
;// CONCATENATED MODULE: ./src/components/Informat.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Option = es_select/* default.Option */.Z.Option;
var initForm = {
  auth_name: localStorage.getItem('adminname'),
  role: '',
  remark: ''
};
var Informat = function Informat(props) {
  var visible = props.visible,
    onCancel = props.onCancel;
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedKeys = _useState4[0],
    setCheckedKeys = _useState4[1];
  var _Form$useForm = es_form/* default.useForm */.Z.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var treeData = router_menus;
  var onCheck = function onCheck(checkedKeysValue) {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  var handleOk = function handleOk(values) {
    setLoading(true);
    //操作 
    var data = _objectSpread(_objectSpread({}, values), {
      permissions: checkedKeys
    });
    console.log(data);
    setTimeout(function () {
      setLoading(false);
      message/* default.success */.ZP.success('修改成功');
      onCancel();
    }, 2000);
  };
  var validateMessages = {
    required: "'${name}' 是必选字段"
  };
  (0,react.useEffect)(function () {
    form.setFieldsValue({
      name: localStorage.getItem('username')
    });
  }, [visible]);
  var footer = function footer() {
    return /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
      type: "primary",
      onClick: function onClick() {
        return form.submit();
      },
      loading: loading
    }, "\u786E\u5B9A"), /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
      onClick: onCancel
    }, "\u53D6\u6D88"));
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(drawer/* default */.Z, {
    title: "\u4FEE\u6539\u8D44\u6599",
    width: 360,
    visible: visible,
    onClose: onCancel,
    bodyStyle: {
      paddingBottom: 80
    },
    extra: footer()
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z, {
    layout: "vertical",
    hideRequiredMark: true,
    form: form,
    initialValues: initForm,
    validateMessages: validateMessages,
    onFinish: handleOk
  }, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    name: "name",
    label: "\u7528\u6237\u540D",
    hasFeedback: true,
    rules: [{
      required: true,
      message: "Please enter user name"
    }]
  }, /*#__PURE__*/react.createElement(input/* default */.Z, {
    placeholder: "Please enter user name"
  })), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    name: "owner",
    label: "\u89D2\u8272",
    rules: [{
      required: true,
      message: "Please select an owner"
    }]
  }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    placeholder: "Please select an owner"
  }, /*#__PURE__*/react.createElement(Option, {
    value: "admin"
  }, "\u7BA1\u7406\u5458"), /*#__PURE__*/react.createElement(Option, {
    value: "tourists"
  }, "\u6E38\u5BA2"))), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    name: "type",
    label: "\u7C7B\u578B",
    rules: [{
      required: true,
      message: "Please choose the type"
    }]
  }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    placeholder: "Please choose the type"
  }, /*#__PURE__*/react.createElement(Option, {
    value: "private"
  }, "Private"), /*#__PURE__*/react.createElement(Option, {
    value: "public"
  }, "Public"))), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    name: "description",
    label: "Description"
  }, /*#__PURE__*/react.createElement(input/* default.TextArea */.Z.TextArea, {
    rows: 4,
    placeholder: "please enter url description"
  })), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    name: "permissions",
    label: "\u6743\u9650"
  }, /*#__PURE__*/react.createElement(tree/* default */.Z, {
    checkable: true,
    defaultExpandAll: true,
    onCheck: onCheck,
    checkedKeys: checkedKeys,
    treeData: treeData
  })))));
};
/* harmony default export */ var components_Informat = (Informat);
;// CONCATENATED MODULE: ./src/components/Header.jsx
function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }
function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }
function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Header_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Header() {
  var _useState = (0,react.useState)(defaultImg_namespaceObject),
    _useState2 = Header_slicedToArray(_useState, 2),
    avater = _useState2[0],
    setAvater = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = Header_slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var navigate = (0,dist/* useNavigate */.s0)();
  var username = localStorage.getItem("username");
  var onClose = function onClose() {
    setOpen(false);
  };
  var menu = /*#__PURE__*/react.createElement(es_menu/* default */.Z, {
    items: [{
      key: "1",
      label: /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: function onClick() {
          setOpen(true);
        }
      }, "\u4FEE\u6539\u8D44\u6599"),
      icon: /*#__PURE__*/react.createElement(SmileOutlined/* default */.Z, null)
    }, {
      type: "divider"
    }, {
      key: "2",
      label: /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: function onClick() {
          localStorage.clear();
          sessionStorage.clear();
          // logout();
          message/* default.success */.ZP.success("退出成功");
          navigate("/login");
        }
      }, "\u9000\u51FA\u767B\u5F55"),
      icon: /*#__PURE__*/react.createElement(SmileOutlined/* default */.Z, null)
    }]
  });
  return /*#__PURE__*/react.createElement("header", null, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: "",
    className: "logo-img"
  }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    overlay: menu
  }, /*#__PURE__*/react.createElement("div", {
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    className: "right"
  }, /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement("img", {
    src: avater,
    alt: "",
    className: "avater-img"
  }), /*#__PURE__*/react.createElement("span", {
    className: "username"
  }, username), /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, null))))), /*#__PURE__*/react.createElement(components_Informat, {
    visible: open,
    onCancel: onClose
  }));
}
;// CONCATENATED MODULE: ./src/pages/NotFound.jsx



function NotFound() {
  var navigate = (0,dist/* useNavigate */.s0)();
  var backToHome = function backToHome() {
    navigate('/');
  };
  var message = "对不起，你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限";
  return /*#__PURE__*/react.createElement("div", {
    style: {
      background: "#f0f2f5",
      marginTop: "-20px",
      height: "100%"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "wscn-http404"
  }, /*#__PURE__*/react.createElement("div", {
    className: "pic-404"
  }), /*#__PURE__*/react.createElement("div", {
    className: "bullshit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bullshit__headline"
  }, message), /*#__PURE__*/react.createElement("div", {
    className: "bullshit__info"
  }, "\u5BF9\u4E0D\u8D77\uFF0C\u4F60\u6CA1\u6709\u6743\u9650"), /*#__PURE__*/react.createElement("a", {
    onClick: backToHome,
    className: "bullshit__return-home"
  }, "\u8FD4\u56DE\u9996\u9875"))));
}
;// CONCATENATED MODULE: ./src/router/main.jsx



var renderRoute = function renderRoute(menus) {
  return menus.map(function (item) {
    if (item.children) {
      return /*#__PURE__*/react.createElement(dist/* Route */.AW, {
        path: item.path,
        key: item.key
      }, renderRoute(item.children));
    } else {
      return /*#__PURE__*/react.createElement(dist/* Route */.AW, {
        path: item.path,
        key: item.key,
        element: /*#__PURE__*/react.createElement(item.component, null)
      });
    }
  });
};
var renderRedirect = function renderRedirect(menus) {
  return /*#__PURE__*/react.createElement(dist/* Route */.AW, {
    path: "/",
    element: /*#__PURE__*/react.createElement(dist/* Navigate */.Fg, {
      to: menus[0].path
    })
  });
};
function AppMain(props) {
  var menus = props.menus;
  return /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("h2", null, "loading...")
  }, /*#__PURE__*/react.createElement(dist/* Routes */.Z5, null, renderRoute(menus), renderRedirect(menus), /*#__PURE__*/react.createElement(dist/* Route */.AW, {
    path: "*",
    element: /*#__PURE__*/react.createElement(NotFound, null)
  })));
}
// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/index.js + 5 modules
var breadcrumb = __webpack_require__(6298);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(9655);
;// CONCATENATED MODULE: ./src/components/BreadCrumbs.jsx
function BreadCrumbs_slicedToArray(arr, i) { return BreadCrumbs_arrayWithHoles(arr) || BreadCrumbs_iterableToArrayLimit(arr, i) || BreadCrumbs_unsupportedIterableToArray(arr, i) || BreadCrumbs_nonIterableRest(); }
function BreadCrumbs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BreadCrumbs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BreadCrumbs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BreadCrumbs_arrayLikeToArray(o, minLen); }
function BreadCrumbs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function BreadCrumbs_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function BreadCrumbs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function BreadCrumbs() {
  var _useLocation = (0,dist/* useLocation */.TH)(),
    pathname = _useLocation.pathname;
  var _useState = (0,react.useState)([]),
    _useState2 = BreadCrumbs_slicedToArray(_useState, 2),
    bread = _useState2[0],
    setBread = _useState2[1];
  var breadcrumbNameMap = [];
  var list = pathname.split("/");
  var getData = function getData() {
    var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    menus.forEach(function (item) {
      if (item.path === list.slice(0, i + 1).join("/")) {
        if (list.length > i + 1) {
          breadcrumbNameMap.push({
            title: item.title,
            path: item.path
          });
          getData(item.children, i + 1);
        } else {
          breadcrumbNameMap.push({
            title: item.title,
            path: item.path
          });
        }
      }
    });
  };
  (0,react.useEffect)(function () {
    getData(router_menus);
    setBread(breadcrumbNameMap);
  }, [pathname]);
  return /*#__PURE__*/react.createElement(breadcrumb/* default */.Z, null, bread.map(function (i, index) {
    return /*#__PURE__*/react.createElement(breadcrumb/* default.Item */.Z.Item, {
      key: index
    }, index !== bread.length ? /*#__PURE__*/react.createElement(react_router_dom_dist/* Link */.rU, {
      to: i.path
    }, i.title) : i.title);
  }));
}
// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(7183);
;// CONCATENATED MODULE: ./src/components/Asider.jsx
function Asider_slicedToArray(arr, i) { return Asider_arrayWithHoles(arr) || Asider_iterableToArrayLimit(arr, i) || Asider_unsupportedIterableToArray(arr, i) || Asider_nonIterableRest(); }
function Asider_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Asider_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Asider_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Asider_arrayLikeToArray(o, minLen); }
function Asider_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Asider_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Asider_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Sider = layout/* default.Sider */.Z.Sider;
var renderMenu = function renderMenu(menus) {
  var list = [];
  menus.map(function (item) {
    if (item.hidden) return undefined;
    var lin = {
      label: item.title,
      key: item.path,
      icon: item.icon
    };
    if (item.children) {
      var children = renderMenu(item.children);
      if (children.length) {
        lin["children"] = children;
      }
      list.push(lin);
    } else {
      list.push(lin);
    }
  });
  return list;
};
function Asider(props) {
  var _useLocation = (0,dist/* useLocation */.TH)(),
    pathname = _useLocation.pathname;
  var navigate = (0,dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(false),
    _useState2 = Asider_slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var menus = props.menus;
  var _useState3 = (0,react.useState)([pathname]),
    _useState4 = Asider_slicedToArray(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var _useState5 = (0,react.useState)(["/" + pathname.split("/")[1]]),
    _useState6 = Asider_slicedToArray(_useState5, 2),
    openKeys = _useState6[0],
    setOpenKeys = _useState6[1];
  var rootSubmenuKeys = [];
  (0,react.useEffect)(function () {
    pathname === '/' && setSelectedKey([menus[0].path]);
  }, []);
  menus.forEach(function (item) {
    if (item.children) {
      rootSubmenuKeys.push(item.path);
    }
  });
  var onOpenChange = function onOpenChange(keys) {
    var latestOpenKey = keys.find(function (key) {
      return openKeys.indexOf(key) === -1;
    });
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  var handleClick = function handleClick(e) {
    navigate(e.key);
    setSelectedKey([e.key]);
  };
  return /*#__PURE__*/react.createElement(Sider, {
    collapsible: true,
    collapsed: collapsed,
    onCollapse: function onCollapse(value) {
      return setCollapsed(value);
    }
  }, /*#__PURE__*/react.createElement(es_menu/* default */.Z, {
    selectedKeys: selectedKey,
    openKeys: openKeys,
    onOpenChange: onOpenChange,
    onClick: handleClick,
    mode: "inline",
    theme: "dark",
    items: renderMenu(menus)
  }));
}
;// CONCATENATED MODULE: ./src/utils/util.js
function util_typeof(obj) { "@babel/helpers - typeof"; return util_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, util_typeof(obj); }
/**
 * @desc 深拷贝
 * @param obj 被拷贝数据
 * @return {obj} data
 * */
var deepCopy = function deepCopy(obj) {
  //判断传入的值是否为一个对象
  if (obj === null && util_typeof(obj) !== "object") {
    return obj;
  }
  // 判断对象的类型 注意这里不考虑包装类对象
  if (Object.prototype.toString.call(obj) === "[object Date]") {
    return new Date(obj);
  }
  if (Object.prototype.toString.call(obj) === "[object RegExp]") {
    return new RegExp(obj);
  }
  if (Object.prototype.toString.call(obj) === "[object Undefined]") {
    return new Error(obj);
  }
  // 判断对象是类
  var newObj = Array.isArray(obj) ? [] : {};
  for (var item in obj) {
    if (util_typeof(obj[item]) === "object" && obj[item]) {
      newObj[item] = deepCopy(obj[item]);
    } else {
      newObj[item] = obj[item];
    }
  }
  return newObj;
};
;// CONCATENATED MODULE: ./src/App.jsx
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }
function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }
function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function App_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var App_Sider = layout/* default.Sider */.Z.Sider,
  Content = layout/* default.Content */.Z.Content;
var App = function App(props) {
  var _useState = (0,react.useState)(false),
    _useState2 = App_slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = App_slicedToArray(_useState3, 2),
    fmenus = _useState4[0],
    setFmenus = _useState4[1];
  var navigate = (0,dist/* useNavigate */.s0)();
  //token验证，，或者用路由拦截
  var Validation = function Validation(menus, meun) {
    return menus.filter(function (item) {
      if (item.children) {
        item.children = Validation(item.children, meun);
      }
      return meun.includes(item["key"]);
    });
  };
  (0,react.useEffect)(function () {
    // localStorage.setItem('active-eruda',false)
    (0,user/* getPassword */.I)().then(function (res) {
      var fing = res.some(function (i) {
        return i.token === localStorage.getItem("token");
      });
      if (fing) {
        var meun = localStorage.getItem("meun");
        if (meun.includes("all")) {
          setFmenus(router_menus);
        } else {
          var meunsList = deepCopy(router_menus);
          setFmenus(Validation(meunsList, meun));
        }
        setState(true);
      } else {
        navigate('/login');
        setState(false);
      }
    });
  }, [localStorage.getItem("token")]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, state ? /*#__PURE__*/react.createElement(layout/* default */.Z, {
    id: "app"
  }, /*#__PURE__*/react.createElement(Header, null), /*#__PURE__*/react.createElement(layout/* default */.Z, null, /*#__PURE__*/react.createElement(Asider, {
    menus: fmenus
  }), /*#__PURE__*/react.createElement(Content, null, /*#__PURE__*/react.createElement(BreadCrumbs, null), /*#__PURE__*/react.createElement(AppMain, {
    menus: fmenus
  }))), /*#__PURE__*/react.createElement("footer", null, "Respect | Copyright \xA92022 Author \u66DC\u7098")) : null);
};
var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = {};
/* harmony default export */ var src_App = ((0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps)(App));
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(9676);
;// CONCATENATED MODULE: ./src/pages/scss/login.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var login_module = ({"login":"UT8kIvYiXtIZjS3sdSYY","ant-form-item-label":"ko8YXak27MeZmqwD6ut2","ant-checkbox-wrapper":"EipI6PXolEIZzfmgNuDU"});
;// CONCATENATED MODULE: ./src/pages/Login.jsx
function Login_slicedToArray(arr, i) { return Login_arrayWithHoles(arr) || Login_iterableToArrayLimit(arr, i) || Login_unsupportedIterableToArray(arr, i) || Login_nonIterableRest(); }
function Login_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Login_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Login_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Login_arrayLikeToArray(o, minLen); }
function Login_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Login_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Login_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var loginMsg = [{
  msg: "没有账号?注册",
  x: 0,
  color: "#3187aa",
  img: __webpack_require__(1868)
}, {
  msg: "已注册？登录",
  x: 100,
  color: "#325690",
  img: __webpack_require__(5386)
}];
var Login = function Login() {
  var navigate = (0,dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(loginMsg[0]),
    _useState2 = Login_slicedToArray(_useState, 2),
    msg = _useState2[0],
    setMsg = _useState2[1];
  var onFinish = function onFinish(values) {
    (0,user/* getPassword */.I)().then(function (res) {
      var fing = res.find(function (i) {
        return i.password === values.password;
      });
      if (fing) {
        localStorage.setItem("username", values.username);
        localStorage.setItem("token", fing.token);
        localStorage.setItem("meun", fing.meun);
        message/* default.success */.ZP.success("欢迎登录系统");
        navigate("/");
      } else {
        message/* default.error */.ZP.error("密码或用户名错误！");
      }
    });
  };
  var onRegister = function onRegister(values) {
    message/* default.error */.ZP.error("没有注册权限！");
    setMsg(loginMsg[0]);
  };
  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  };
  var ChangMsg = function ChangMsg() {
    if (msg.x === 0) {
      setMsg(loginMsg[1]);
    } else {
      setMsg(loginMsg[0]);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: login_module.login
  }, /*#__PURE__*/react.createElement("div", {
    className: "login_box"
  }, /*#__PURE__*/react.createElement("div", {
    className: "boxlog login_pre",
    style: {
      transform: ["translateX(".concat(msg.x, "%)")],
      backgroundColor: msg.color
    }
  }, /*#__PURE__*/react.createElement("h1", null, "WELCOME!"), /*#__PURE__*/react.createElement("div", {
    className: "img-box"
  }, /*#__PURE__*/react.createElement("img", {
    src: msg.img,
    alt: "\u52A0\u8F7D\u5931\u8D25"
  })), /*#__PURE__*/react.createElement("span", {
    className: "text-span",
    onClick: ChangMsg
  }, msg.msg)), /*#__PURE__*/react.createElement("div", {
    className: "boxlog  login_box_r"
  }, /*#__PURE__*/react.createElement("h1", null, "\u6CE8\u518C"), /*#__PURE__*/react.createElement(es_form/* default */.Z, {
    name: "basic",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      remember: true
    },
    onFinish: onRegister,
    onFinishFailed: onFinishFailed,
    autoComplete: "off",
    requiredMark: false
  }, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "\u7528\u6237\u540D",
    name: "username",
    hasFeedback: true,
    rules: [{
      required: true,
      message: "Please input your username!"
    }]
  }, /*#__PURE__*/react.createElement(input/* default */.Z, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "\u5BC6\u7801",
    name: "password",
    hasFeedback: true,
    rules: [{
      required: true,
      message: "Please input your password!"
    }]
  }, /*#__PURE__*/react.createElement(input/* default.Password */.Z.Password, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "\u786E\u8BA4\u5BC6\u7801",
    name: "repassword",
    dependencies: ["password"],
    hasFeedback: true,
    rules: [{
      required: true,
      message: "Please confirm your password!"
    }, function (_ref) {
      var getFieldValue = _ref.getFieldValue;
      return {
        validator: function validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("The two passwords that you entered do not match!"));
        }
      };
    }]
  }, /*#__PURE__*/react.createElement(input/* default.Password */.Z.Password, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    wrapperCol: {
      offset: 0,
      span: 36
    }
  }, /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
    type: "primary",
    htmlType: "submit",
    style: {
      width: "100%"
    }
  }, "\u6CE8\u518C")))), /*#__PURE__*/react.createElement("div", {
    className: "boxlog  login_box_r"
  }, /*#__PURE__*/react.createElement("h1", null, "\u767B\u5F55"), /*#__PURE__*/react.createElement(es_form/* default */.Z, {
    name: "basic",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    autoComplete: "off",
    requiredMark: false
  }, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "\u7528\u6237\u540D",
    name: "username",
    rules: [{
      required: true,
      message: "Please input your username!"
    }]
  }, /*#__PURE__*/react.createElement(input/* default */.Z, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "\u5BC6\u7801",
    name: "password",
    rules: [{
      required: true,
      message: "Please input your password!"
    }]
  }, /*#__PURE__*/react.createElement(input/* default.Password */.Z.Password, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    name: "remember",
    valuePropName: "checked",
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }, /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, null, "Remember me")), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    wrapperCol: {
      offset: 0,
      span: 36
    }
  }, /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
    type: "primary",
    htmlType: "submit",
    style: {
      width: "100%"
    }
  }, "\u767B\u5F55"))))));
};
/* harmony default export */ var pages_Login = (Login);
// EXTERNAL MODULE: ./src/pages/Register.jsx
var Register = __webpack_require__(2072);
;// CONCATENATED MODULE: ./src/router/index.jsx






/* History模式
     BrowserRouter
Hash模式
    HashRouter
*/
var BaseRouter = function BaseRouter() {
  return /*#__PURE__*/react.createElement(react_router_dom_dist/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(dist/* Route */.AW, {
    path: "/*",
    element: /*#__PURE__*/react.createElement(src_App, null)
  }), /*#__PURE__*/react.createElement(dist/* Route */.AW, {
    path: "/login",
    element: /*#__PURE__*/react.createElement(pages_Login, null)
  }), /*#__PURE__*/react.createElement(dist/* Route */.AW, {
    path: "/register",
    element: /*#__PURE__*/react.createElement(Register["default"], null)
  })));
};
/* harmony default export */ var router = (BaseRouter);
;// CONCATENATED MODULE: ./src/store/reducer.js
var defaultstate = {
  msg: '你好世界'
};
//导出一个函数
// eslint-disable-next-line
/* harmony default export */ var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultstate;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'changTitle':
      newState.msg = action.value;
      break;
    default:
      break;
  }
  return newState;
});
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(4890);
;// CONCATENATED MODULE: ./src/store/index.js


var store = (0,redux/* createStore */.MT)(reducer);
/* harmony default export */ var src_store = (store);
;// CONCATENATED MODULE: ./src/index.js






var root = (0,client/* createRoot */.s)(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(es/* Provider */.zt, {
  store: src_store
}, /*#__PURE__*/react.createElement(router, null)));

/***/ }),

/***/ 2072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6706);


var Register = function Register(props) {
  var ss = [{
    id: 110
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    list();
  }, []);
  var list = function list() {
    var clickHand = function clickHand(v) {
      console.log(v);
    };
    var dom = document.getElementById("flag");
    var str = '<div onclick="clickHand(ss)">点击</div>';
    console.log(dom);
    dom.innerHTML = str;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "flag"
  }, "Register");
};
var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .connect */ .$j)(mapStateToProps, mapDispatchToProps)(Register));

/***/ }),

/***/ 1868:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/7e19818f154f215a4b57.jpg";

/***/ }),

/***/ 5386:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/55375dff1b4a44d84d77.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/css/" + chunkId + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "uu:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/pro-react/dist/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = function(chunkId, fullhref, oldTag, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"17":1,"351":1,"570":1,"886":1,"934":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkuu"] = self["webpackChunkuu"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(3215); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;