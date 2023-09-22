import React, { useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, message, Drawer, Button } from 'antd';
import defaultAvater from '@/assets/image/defaultImg.jpg';
import logo from '@/assets/image/logo.jpg';
import { allclear, getUserInfo } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Informat from '../Informat';

const HeaderCss = styled.div`
  height: 70px;
  background: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 头部
  .avater-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .logo-img {
    height: 72px;
    // width: 40px;
    // border-radius: 50%;
  }
  .right {
    height: '60px';
    display: 'block';
    line-height: '60px';
    .username {
      max-width: 80px;
      display: block;
      @include t-overflow;
      overflow:hidden;
    }
    &:hover {
      color: #1890ff;
    }
  }
`;
export default function Header() {
  const [avater, setAvater] = useState(defaultAvater);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const username = getUserInfo();
  const onClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    allclear();
    message.success('退出成功');
    navigate('/login');
  };
  const items = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setOpen(true);
          }}
        >
          修改资料
        </a>
      ),
      icon: <SmileOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={handleOk}>
          退出登录
        </a>
      ),
      icon: <SmileOutlined />,
    },
  ];
  return (
    <HeaderCss>
      <img src={logo} alt="" className="logo-img" />
      <div>
        <Dropdown menu={{ items }}>
          <div onClick={(e) => e.preventDefault()} className="right">
            <Space>
              <img src={avater} alt="" className="avater-img" />
              <span className="username">{username}</span>
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </div>
      <Informat visible={open} onCancel={onClose}></Informat>
    </HeaderCss>
  );
}
