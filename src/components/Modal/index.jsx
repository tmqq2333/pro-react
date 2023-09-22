/***
 * //公用编辑新增弹窗组件
 *  data:编辑会用到的原数据。注意Id,根据接口的名字修改代码的id
 *  apiSet:保存的接口
 *  getRefresh: 组件更新后提示的方法
 *  title:  按钮名字
 *  addlist:节省时间，字段最好和columns的字段一致，如果一样且都是输入框，
 *     直接填addlist={columns.slice(0,columns.length - 1) as AddlistType}；
 *     如果有不一样的比如选择框，调用setAddlist,注意事项见方法；
 *     如果都不一样，请直接写一个方法，用法见commom.d.ts的AddlistType；
 *  rule：如果全局必填，请加上
 *
 *
 * //2023-9-22  addlist的render改为Fn避免冲突
 */
import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Form, Modal, message, Space } from 'antd';
import { NotificationMsg } from '@components/Notification';
import { EditOutlined } from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
export default function Fn(props) {
  const [open, setopen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const { data, apiSet, getRefresh, title, addlist, rule } = props;
  const showModal = () => {
    setopen(true);
  };
  useEffect(() => {
    if (open) {
      form.resetFields();
      let obj = {};
      if (data) {
        for (let i in data) {
          obj[i] = data[i];
        }
        // if (data) {
        //   for (let i in data) {
        //     if (i !== 'key' && i !== 'Id') {
        //       obj[i] = data[i];
        //     }
        //   }

        form.setFieldsValue({ ...obj });
      }
    }
  }, [open]);
  const onFinish = (values) => {
    //通过是否存在id判断为编辑还是新增
    console.log('Success:', values);
    apiSet ? setConfirmLoading(true) : '';
    let val = values;
    if (data) {
      val = { ...values };
    }
    console.log('val', val);
    apiSet?.(val)
      .then(() => {
        setopen(false);
        setConfirmLoading(false);
        NotificationMsg({ type: 'success', desc: '操作成功' });
        getRefresh?.(!open);
      })
      .catch(() => {
        setConfirmLoading(false);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setConfirmLoading(false);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setopen(false);
  };
  const setFrom = (name, value) => {
    form.setFieldsValue({ [name]: value });
  };
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <>
      <Button type={title ? 'primary' : 'dashed'} onClick={showModal} icon={title ? '' : <EditOutlined />}>
        {title ?? '编辑'}
      </Button>
      <Modal
        // title="自由流程"
        title={title ?? '编辑'}
        open={open}
        bodyStyle={{
          minHeight: 236,
          maxHeight: 658,
          overflowY: 'auto',
          backgroundImage: "linear-gradient(-20deg, #d1ebe0 0%, #b7dce6 100%)",
          padding: '30px',
          borderRadius: '10px',
        }}
        style={{
          border: "2px #7dfbfa solid",
          borderRadius: '10px',
          width: '600px',
        }}
        footer={null}
        centered
        forceRender
        closable={false}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          style={{ paddingBottom: '30px' }}
          {...layout}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {addlist?.map((v) => {
            return (
              <Form.Item key={v.key} label={v.title} name={v.key} rules={v.rules ?? rule ? [{ required: true }] : []}>
                {v.Fn?.(setFrom) ?? <Input allowClear disabled={v.disabled} />}
              </Form.Item>
            );
          })}
          <div
            style={{
              width: '90%',
              backgroundColor: '#fff',
              height: '60px',
              position: 'absolute',
              bottom: '0',
              right: '30px',
              display: 'flex',
              justifyContent: 'flex-end',
              zIndex: 8,
            }}
          >
            <Space>
              <Button onClick={handleCancel}>取消</Button>
              <Button type="primary" loading={confirmLoading} htmlType="submit">
                确定
              </Button>
            </Space>
          </div>
        </Form>
      </Modal>
    </>
  );
}
