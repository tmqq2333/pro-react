/***
 * //公用top搜索
 *  data:字段
 *  setTimeDate:得到搜索数据的方法
 *  range: 时间默认天数
 *  showLabel:  是否显示label
 *  noTime:不使用时间搜索
 *  append：显示开启关闭的Switch
 *  needReset:显示重置按钮，默认显示
 *  rule：如果全局必填，请加上
 *  children的slot='right'则置于右侧
 *  使用见view的list页面
 *
 *
 * //2023-9-22  data的render改为Fn避免冲突
 */
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Space, Input, Form, DatePicker, Switch, Row, Col, Button } from 'antd';
const { RangePicker } = DatePicker;
const Topbox = (props) => {
  const { data, children, range, showLabel = false, needReset = true } = props;
  const defaultSelectDate = [
    dayjs()
      .startOf('day')
      .subtract(range ?? 7, 'd'),
    dayjs().endOf('day'),
  ];
  const [isdo, setIsdo] = useState(true);
  const [value, setValue] = useState({
    startTime: defaultSelectDate[0].format('YYYY-MM-DD'),
    endTime: defaultSelectDate[1].format('YYYY-MM-DD'),
  });
  const [form] = Form.useForm();
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf('day');
  };
  let slots = {
    default: [],
  };
  if (children) {
    let childrens = Array.isArray(children) ? children : [children];
    childrens.forEach((item) => {
      if (item.props.slot) {
        slots[item.props.slot] = item;
      } else {
        slots['default'].push(item);
      }
    });
  }
  const onFinish = (values) => {
    let valuelist = props.append || props.noTime ? { ...values } : { ...values, ...value };
    let lin = {};
    for (let i in valuelist) {
      if (valuelist[i]) lin[i] = valuelist[i];
    }
    props.setTimeDate?.(lin);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const resetForm = () => {
    form.resetFields();
    const value = form.getFieldsValue();
    props.setTimeDate?.(value);
  };
  return (
    <Row style={{ width: '100%', padding: '12px 0' }} align="middle" justify="space-between">
      <Col flex={1}>
        {/* <div className="topbox"> */}
        {props.append ? (
          <Switch
            onChange={() => setIsdo(!isdo)}
            checkedChildren="开启"
            unCheckedChildren="关闭"
            style={{ margin: '5px 10px' }}
          />
        ) : (
          ''
        )}
        <Form
          name="basic"
          form={form}
          initialValues={{
            remember: true,
          }}
          layout={'inline'}
          disabled={props.append ? isdo : false}
          className="topForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Space size={8} align="start" style={{ display: 'flex' }}>
            {props.append || props.noTime ? (
              ''
            ) : (
              <Form.Item>
                <RangePicker
                  disabledDate={disabledDate}
                  placeholder={['开始时间', '结束时间']}
                  defaultValue={defaultSelectDate}
                  onChange={(e, date) => setValue({ startTime: date[0], endTime: date[1] })}
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            )}
            {data?.map((item, index) => {
              return (
                <Form.Item key={index} name={item.key} label={showLabel ? item.title : ''}>
                  {item.Fn?.() ?? <Input allowClear placeholder={item.title} style={{ width: '100px' }} />}
                </Form.Item>
              );
            })}
            <div>
              <Space>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                {needReset && <Button onClick={resetForm}>重置</Button>}
                {slots['default']}
              </Space>
            </div>
          </Space>
        </Form>
        {/* </div> */}
      </Col>
      {slots['right'] ? (
        <Col
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Space>{slots['right']}</Space>
        </Col>
      ) : (
        ''
      )}
    </Row>
  );
};

export default Topbox;
