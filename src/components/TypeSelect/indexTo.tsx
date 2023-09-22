import React from 'react';
import { Select, Space } from 'antd';
import styled from 'styled-components';

const active = require('../../assets/image/select/active.png');
const noactive = require('../../assets/image/select/noactive.png');
const select = require('../../assets/image/select/select.png');
const selactive = require('../../assets/image/select/selactive.png');
const SelectCss = styled.div`
  .ant-select {
    background: url(${select}) no-repeat;
    background-size: 100% 100%;
    &.ant-select-open {
      background: url(${selactive}) no-repeat;
      background-size: 100% 100%;
    }
    .ant-select-selector {
      background-color: transparent;
      border: none;
      // border-style: none;
      color: #fff;
      font-size: 12px;
    }

    .ant-select-arrow {
      display: none;
    }
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 20px;
  }
  .ant-select .ant-select-selection-item {
    text-overflow: clip;//去掉省略号
  }
  .ant-select-dropdown {
    background-color: transparent;
  }
`;
export default function index(props: any) {
  const { width, height, className } = props;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <SelectCss className={className}>
      <Select
        defaultValue="年"
        style={{ width: width ?? 50, height: height ?? 18 }}
        onChange={handleChange}
        popupClassName="drop"
        options={[
          { value: '年', label: '年' },
          { value: '月', label: '月' },
          { value: '周', label: '周' },
        ]}
      />
    </SelectCss>
  );
}
