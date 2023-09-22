//excel导出

const DEFAULT_COLUMN_WIDTH = 20;
// 根据 antd 的 column 生成 exceljs 的 column
export function generateHeaders(columns) {
  return columns?.map((col) => {
    const obj = {
      // 显示的 name
      header: col.title,
      // 用于数据匹配的 key
      key: col.dataIndex,
      // 列宽
      width: col.width || DEFAULT_COLUMN_WIDTH,
    };
    return obj;
  });
}

export function saveWorkbook(data, fileName, type = '') {
  // 导出文件
  const blob = new Blob([data], { type: type });
  let downloadElement = document.createElement('a');
  let href = window.URL.createObjectURL(blob); //创建下载的链接
  downloadElement.href = href;
  downloadElement.download = fileName; //下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); //点击下载
  document.body.removeChild(downloadElement); //下载完成移除元素
  window.URL.revokeObjectURL(href); //释放blob
}

//计算文字的宽度
const getActualWidthOfChars = (text, options = {}) => {
  const { size = 14, family = 'Microsoft YaHei' } = options;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${size}px ${family}`;
  const metrics = ctx.measureText(text);
  console.log('metrics', metrics);

  const actual = Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight);
  console.log('actual', actual);
  return Math.max(metrics.width, actual) / 5;
};

//计算table内容的宽度
const getwidthMap = (dataSource) => {
  // 定义一个 Map 接收每列的长度值
  const widthMap = new Map();
  // columns 为动态表格的表头数组 data为展示数据的数组
  //作用是遍历所有数据拿到长度最长的一条记下他的宽度
  dataSource?.forEach((target) => {
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const keyWidth = getActualWidthOfChars(target[key]);
        const curValue = widthMap.get(key);
        const curValue_new = isNaN(curValue) ? 0 : curValue;
        // 字段有值就放入数组
        widthMap.set(key, Math.max(curValue_new, keyWidth));
      }
    }
  });
  return widthMap;
};

//计算每列的宽度
export const setColumnsWidth = (columns, dataSource) => {
  const widthMap = getwidthMap(dataSource);
  let ADD_INIT_NUM = 5;
  columns.map((item) => {
    const textWidth = getActualWidthOfChars(item.title);
    if (!item.hasOwnProperty('width')) {
      if (widthMap.size == 0) {
        item.width = Math.ceil(textWidth) + ADD_INIT_NUM;
      } else {
        const dataIn = widthMap.get(item.dataIndex);
        if (isNaN(dataIn) || dataIn == undefined) {
          item.width = Math.ceil(textWidth) + ADD_INIT_NUM;
        } else {
          if (widthMap.get(item.dataIndex) < textWidth) {
            widthMap.set(item.dataIndex, textWidth);
          }
          item.width = Math.ceil(widthMap.get(item.dataIndex)) + ADD_INIT_NUM;
        }
      }
      if (item.width > 200) {
        item.width = 200;
      }
    }
  });

  return columns;
};
