import React, { useState } from 'react';
import HasBtn from '@/components/HasBtn';
import { Button, Space, DatePicker } from 'antd';
import Topbox from '@/components/Topbox';
const { RangePicker } = DatePicker;
export default function Look() {
  const [tableData, setTableData] = useState();
  const [notice, setNotice] = useState(true);
  const [timeDate, setTimeDate] = useState({});
  const onTimeChange = (value, dateString) => {
    setTimeDate({ start: dateString[0] ?? '', end: dateString[1] ?? '' });
  };
  const onSearch = () => {
    setTableData(timeDate);
  };
  const data = [
    { title: '计划批号', key: 'rollPlanNo' },
    { title: 'id', key: 'id' },
    { title: '密码', key: 'password' },
  ];
  return (
    <Topbox className="table-list" showLabel data={data}>
      <HasBtn has={['sys:add']}>
        <Button
          type="primary"
          onClick={() => {
            setNotice(!notice);
          }}
        >
          新增
        </Button>
      </HasBtn>
    </Topbox>
  );
}
