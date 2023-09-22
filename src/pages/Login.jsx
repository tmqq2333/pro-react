import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { getPassword, postPassword } from '@/api/user';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './commpages';
import { setMenu, setToken, setUserInfo } from '@/utils/auth';
const bcrypt = require('bcryptjs');
let loginMsg = [
  {
    msg: '没有账号?注册',
    x: 0,
    color: '#3187aa',
    img: require('../assets/image/a.jpg'),
  },
  {
    msg: '已注册？登录',
    x: 100,
    color: '#325690',
    img: require('../assets/image/b.jpg'),
  },
];
const Login = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState(loginMsg[0]);
  const onFinish = async (values) => {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(values.password, salt);
    // // const isMatch = bcrypt.compareSync(values.password, hash);
    // postPassword({ username: values.username, password: hash })
    //   .then(({ data }) => {
    //     let v = data[0];
    //     let info = {
    //       name: v.name,
    //       shiftObj: v.shiftNo + '|' + v.shiftGroup,
    //     };
    //     setUserInfo(v.name);
    //     setToken(v.token);
    //     setMenu(JSON.stringify(v.menu));
    //     message.success('欢迎登录系统');
    //     navigate('/');
    //   })
    //   .catch(({ msg }) => {
    //     message.error('用户账号不存在，请重新输入！');
    //   });
    try {
      const { data } = await getPassword(values);
      const fing = data.find((i) => i.password === values.password);
      if (fing) {
        setUserInfo(values.username);
        setToken(fing.token);
        console.log('fing.menu', JSON.stringify(fing.menu));

        setMenu(JSON.stringify(fing.menu));
        message.success('欢迎登录系统');
        navigate('/');
      } else {
        message.error('用户账号不存在，请重新输入！');
      }
    } catch (error) {
      message.error('用户账号不存在，请重新输入！');
    }
  };
  const onRegister = (values) => {
    message.error('没有注册权限！');
    setMsg(loginMsg[0]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const ChangMsg = () => {
    if (msg.x === 0) {
      setMsg(loginMsg[1]);
    } else {
      setMsg(loginMsg[0]);
    }
  };
  return (
    <Wrapper>
      <div className="login_box">
        <div
          className="boxlog login_pre"
          style={{
            transform: [`translateX(${msg.x}%)`],
            backgroundColor: msg.color,
          }}
        >
          <h1>WELCOME!</h1>
          <div className="img-box">
            <img src={msg.img} alt="加载失败" />
          </div>
          <span className="text-span" onClick={ChangMsg}>
            {msg.msg}
          </span>
        </div>
        <div className="boxlog  login_box_r">
          <h1>注册</h1>
          <Form
            name="basic-register"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onRegister}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              label="用户名"
              name="username"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="确认密码"
              name="repassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 36,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="boxlog  login_box_r">
          <h1>登录</h1>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 36,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
