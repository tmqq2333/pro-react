import React, { useState, useCallback } from "react";
import { Space, Input, DatePicker, Form, Switch } from "antd";
const { RangePicker } = DatePicker;
import dayjs from "dayjs";
const DEFAULT_SELECT_DATE = [
  dayjs().startOf("day").subtract(7, "d"),
  dayjs().endOf("day"),
];
const Topbox = ({ data, children, setTimeDate, noTime, append }) => {
  const [isdo, setIsdo] = useState(true);
  const [value, setValue] = useState({
    startTime: DEFAULT_SELECT_DATE[0].format("YYYY-MM-DD"),
    endTime: DEFAULT_SELECT_DATE[1].format("YYYY-MM-DD"),
  });
  const [form] = Form.useForm();
  const disabledDate = useCallback((current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  }, []);
  const onFinish = useCallback(
    (values) => {
      let valuelist = noTime ? { ...values } : { ...values, ...value };
      let lin = {};
      for (let i in valuelist) {
        if (valuelist[i]) lin[i] = valuelist[i];
      }
      setTimeDate(lin);
    },
    [noTime, setTimeDate, value]
  );
  const onFinishFailed = useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);
  const handleRangePickerChange = useCallback(
    (e, date) => {
      setValue({ startTime: date[0], endTime: date[1] });
    },
    [setValue]
  );
  const handleFormSubmit = useCallback(
    (values) => {
      const valuelist = noTime ? { ...values } : { ...values, ...value };
      const lin = {};
      for (let i in valuelist) {
        if (valuelist[i]) lin[i] = valuelist[i];
      }
      setTimeDate(lin);
    },
    [noTime, setTimeDate, value]
  );
  //空数组只有第一次变化
  const handleFormItemRender = useCallback((item, index) => {
    return (
      <Form.Item key={index} name={item.value}>
        {item.render?.() ?? <Input allowClear placeholder={item.title} />}
      </Form.Item>
    );
  }, []);
  const renderRangePicker = useCallback(() => {
    if (noTime) {
      return null;
    }
    return (
      <Form.Item>
       
        <RangePicker
          disabledDate={disabledDate}
          placeholder={["开始时间", "结束时间"]}
          defaultValue={DEFAULT_SELECT_DATE}
          onChange={handleRangePickerChange}
          format="YYYY-MM-DD"
        />
      </Form.Item>
    );
  }, [disabledDate, handleRangePickerChange, noTime]);
  const renderSwitch = useCallback(() => {
    if (!append) {
      return null;
    }
    return (
      <Switch
        onChange={setIsdo}
        checkedChildren="开启"
        unCheckedChildren="关闭"
        style={{ margin: "5px 10px" }}
      />
    );
  }, [append]);
  return (
    <div className="topbox">
      {renderSwitch()}
      <Form
        name="basic"
        form={form}
        initialValues={{
          remember: true,
        }}
        layout={"inline"}
        disabled={append ? isdo : false}
        className="topForm"
        onFinish={handleFormSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={8} align="start" style={{ display: "flex" }}>
          {renderRangePicker()}
          {data?.map(handleFormItemRender)}
          <div>
            <Space>{children}</Space>
          </div>
        </Space>
      </Form>
    </div>
  );
};
export default Topbox;
