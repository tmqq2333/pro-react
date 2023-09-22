import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { saveWorkbook } from '@/utils/excelutil';
//直接后端传递blob下载
function ExcelExport(props) {
  const { queryList, getExcelApi, fileName = '报表' } = props;
  const [loading, setLoading] = useState(false);
  //导出
  const exportFn = () => {
    //获取后端excel数据
    setLoading(true);
    getExcelApi(queryList)
      .then((res) => {
        saveWorkbook(res.data, fileName + '.xlsx', res.data.type);
        message.success('已成功导出!');
        setLoading(false);
      })
      .catch((error) => {
        // 请求失败处理
        console.log(error);
        setLoading(false);
        message.error('啊欧~导出失败');
      });
  };
  return (
    /* 日期、查询组件 */
    <Button loading={loading} type="primary" onClick={exportFn}>
      导出数据
    </Button>
  );
}

export default ExcelExport;
