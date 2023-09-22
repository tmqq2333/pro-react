//公用select组件，用法同common-typeselect
import React, { useState, useEffect } from 'react';
import { Select, Space } from 'antd';
import omit from 'lodash/omit';
const { Option } = Select;
export default function index(props) {
  const {
    className,
    getOption,
    seltype = {
      label: 'value',
      value: 'key',
    },
  } = props;
  let originProps = omit(props, ['className', 'seltype', 'getOption']); //组件本身数据
  const [option, setOption] = useState([]);
  getOption?.().then(({ data }) => {
    setOption(data);
  });
  return (
    <div className={className}>
      <Select
        // popupClassName="drop"
        allowClear
        {...originProps}
      />
      {option?.map((item, i) => {
        return (
          <Option key={item[seltype.value]} value={item[seltype.value]}>
            {item[seltype.label]}
          </Option>
        );
      })}
    </div>
  );
}
