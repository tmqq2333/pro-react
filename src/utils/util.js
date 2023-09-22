/**
 * @param menus {array} 菜单
 * @desc 获取菜单的第一项的最终路径
 */

export const getInitMenuPath = (menus) => {
  if (!menus.length) return null;
  if (menus[0].children) {
    return getInitMenuPath(menus[0].children);
  } else {
    return menus[0].path;
  }
};

/**
 * @desc 深拷贝
 * @param obj 被拷贝数据
 * @return {obj} data
 * */
export const deepCopy = (obj) => {
  //判断传入的值是否为一个对象
  if (obj === null && typeof obj !== 'object') {
    return obj;
  }
  // 判断对象的类型 注意这里不考虑包装类对象
  if (Object.prototype.toString.call(obj) === '[object Date]') {
    return new Date(obj);
  }
  if (Object.prototype.toString.call(obj) === '[object RegExp]') {
    return new RegExp(obj);
  }
  if (Object.prototype.toString.call(obj) === '[object Undefined]') {
    return new Error(obj);
  }
  // 判断对象是类
  let newObj = Array.isArray(obj) ? [] : {};
  for (let item in obj) {
    if (typeof obj[item] === 'object' && obj[item]) {
      newObj[item] = deepCopy(obj[item]);
    } else {
      newObj[item] = obj[item];
    }
  }
  return newObj;
  return newObj;
};

/**
 * 获取第一个表格的可视化高度
 * @param {*} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为20)
 * @param {*} id 当前页面中有多个table时需要制定table的id, 单独计算那个id的table高度，一般用于一个页面多个table, 某一个table是全屏高度
 * @param {string/number} fixHeight 固定table的高度。
 */
export function getTableScroll({ extraHeight = 20, id, fixHeight }) {
  // console.log(extraHeight)
  // console.log(id)
  //  默认底部分页64 + 边距10
  // if (typeof extraHeight == "undefined") {
  //   //  默认底部分页64 + 边距10
  //   extraHeight = 74
  // }
  let tHeader = null;
  let tBody = null;
  if (id) {
    tHeader = document.getElementById(id)
      ? document.getElementById(id).getElementsByClassName('ant-table-thead')[0]
      : null;
    tBody = document.getElementById(id)
      ? document.getElementById(id).getElementsByClassName('ant-table-body')[0]
      : null;
  } else {
    tHeader = document.getElementsByClassName('ant-table-thead')[0];
    // tBody = document.getElementsByClassName("ant-table-body")[0]
  }
  //表格内容距离顶部的距离
  let tHeaderBottom = 0;
  let headerH = 0;
  if (tHeader) {
    tHeaderBottom = tHeader.getBoundingClientRect().bottom;
    headerH = tHeader.offsetHeight || 0;
  }

  //窗体高度-表格内容顶部的高度-表格内容底部的高度
  // let height = document.body.clientHeight - tHeaderBottom - extraHeight
  let height = 0;
  if (fixHeight) {
    height = fixHeight - headerH + 'px';
  } else {
    height = `calc(100vh - ${tHeaderBottom + extraHeight}px)`;
  }
  if (tBody) {
    tBody.style.height = height;
  }
  return height;
}

/**
 * @desc 节流
 * @param func 函数
 * @param delay 延迟时间
 * @return {func} data
 * */
let timer = null;
export const throttle = (func, delay) => {
  return function () {
    let that = this;
    let arg = arguments;
    if (timer) {
      return;
    } else {
      timer = setTimeout(() => {
        func.apply(that, arg);
        timer = null;
      }, delay);
    }
  };
};
/**
 * @desc 防抖
 * @param callback 函数
 * @param time 延迟时间
 * @return {func} data
 * */
let id = null;
export const debounce = (callback, time = 1000) => {
  return function () {
    let that = this;
    let arg = arguments;
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      callback.apply(that, arg);
    }, time);
  };
};

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * @desc 合并
 * @param target 被合成的目标eg{}
 * @param arg 合并的对象或者数组
 * @return {obj or arry} data
 * */
export function merge(target, ...arg) {
  return arg.reduce((acc, cur) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key];
      if (isObject(srcVal)) {
        subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal);
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : [];
            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item);
          } else {
            return item;
          }
        });
      } else {
        subAcc[key] = srcVal;
      }
      return subAcc;
    }, acc);
  }, target);
}

/**
 * @param original {object} 原始对象
 * @param newObj {object} 新对象
 * @desc 给原始对象指定的key设置成新对象的值，避免大量赋值工作，由原始对象的key来决定
 */
export function setOriginalKV(original, newObj) {
  for (const key in original) {
    if (newObj[key] !== undefined) {
      original[key] = newObj[key];
    }
  }
}


/**
 * 获取网页？标识字符是否存在，存在则返回其值
 * 调用方式;GetQueryString('lg') === 'wpf';
 * @param {*} name 标识字符
 * @return {string/null}
 */

export function GetQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

/**
 * 混合编辑的字段内容/  !不能直接在model的props使用，请用一个变量接收后，赋给model的props
 * @param {any[]} columns 设置的colums内容
 * @param {any[]} list  覆盖的colums内容，key相同则覆盖
 * @param {boolean} flag  是否存在操作列
 * @return {AddlistType} addlist
 */

export function setAddlist(columns, list, flag = true) {
  if (!columns.length || !list.length) {
    return undefined;
  }
  if (flag) columns = columns.slice(0, columns.length - 1);
  let addlist = columns;
  console.log('111111');

  columns.map((item, i) => {
    let isfind = list.findIndex((col) => col.key === item.key || col.dataIndex === item.dataIndex);
    console.log(isfind, 'isfind');
    if (isfind !== -1) {
      addlist[i] = list[isfind];
      list.splice(isfind, 1);
    }
  });
  if (list.length) {
    addlist = [...addlist, ...list];
  }
  return addlist;
}
