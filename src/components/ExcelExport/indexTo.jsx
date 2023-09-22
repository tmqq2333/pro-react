//前端的excel导出,针对单表头。
//引入2个包
import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import * as ExcelJs from 'exceljs';
import { generateHeaders, saveWorkbook, setColumnsWidth } from './excelutil';


function ExcelExport(props) {
  const { columns, data, fileName = '报表' } = props;
  const [loading, setLoading] = useState(false);
  //导出
  const exportFn = () => {
    setLoading(true);
    try {
      setColumnsWidth(columns, data);
      // 创建工作簿
      const workbook = new ExcelJs.Workbook();
      // 添加sheet
      const worksheet = workbook.addWorksheet('sheet');
      // 设置 sheet 的默认行高
      worksheet.properties.defaultRowHeight = 20;
      // 设置列
      let cols = (worksheet.columns = generateHeaders(columns));
      // 添加行
      let rows = worksheet.addRows(data);
      let headerRow = worksheet.getRow(1);
      headerRow.height = 35;
      headerRow.eachCell((cell, colNum) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'f5f7f9' },
        };
        cell.font = {
          bold: true,
          italic: true,
          size: 16,
          name: '微软雅黑',
          color: { argb: '000000' },
          vertAlign: 'superscript',
        };
      });
      rows?.forEach((row) => {
        // 设置字体
        row.font = {
          size: 11,
          name: '微软雅黑',
        };
        // 设置对齐方式
        row.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true};
      });
      // 导出excel
      workbook.xlsx.writeBuffer().then((data) => {
        saveWorkbook(data, fileName + '.xlsx');
      });
      message.success('已成功导出!');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error('啊哦~导出失败了');
    }
  };
  return (
    /* 日期、查询组件 */
    <Button loading={loading} type="primary" onClick={exportFn}>
      导出数据
    </Button>
  );
}

export default ExcelExport;
