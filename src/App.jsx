import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPassword } from '@/api/user';
import { Outlet, useNavigate } from 'react-router-dom';
import menus from '@/router/menus';
import Header from '@/components/layout/Header';
import AppMain from '@/router/main';
import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Asider from '@/components/layout/Asider';
import { Layout, message } from 'antd';
import { deepCopy } from '@/utils/util';
import styled from 'styled-components';
const { Sider, Content } = Layout;
import { getMenu, getToken } from '@/utils/auth';
const Footer = styled.footer`
  height: 70px;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 70px;
`;
export const App = () => {
  const [state, setState] = useState(false);
  const [fmenus, setFmenus] = useState([]);
  const navigate = useNavigate();
  //token验证，，或者用路由拦截
  const meun = getMenu();
  console.log('meun', meun);

  const istoken = getToken();
  const Validation = (menus, meun) => {
    return menus.filter((item) => {
      if (item.children) {
        item.children = Validation(item.children, meun);
      }
      return meun.includes(item['key']);
    });
  };
  useEffect(() => {
    // localStorage.setItem('active-eruda',false)
    if (istoken) {
      if (!meun || meun.length === 0) {
        message.error(`没有权限账户`);
        return navigate('/login');
      }
      if (meun.includes('all')) {
        console.log('all', menus);

        setFmenus(menus);
      } else {
        let meunsList = deepCopy(menus);
        setFmenus(Validation(meunsList, meun));
      }
      setState(true);
    } else {
      console.log('没登录');
      navigate('/login');
      setState(false);
    }
  }, [istoken]);
  return (
    <>
      {state ? (
        <Layout id="app">
          <Header />
          <Layout>
            <Asider menus={fmenus} />
            <Content>
              <BreadCrumbs></BreadCrumbs>
              <AppMain menus={fmenus}></AppMain>
              {/* <Outlet></Outlet> */}
            </Content>
          </Layout>
          <Footer>Respect | Copyright &copy;2022 Author 曜炘</Footer>
        </Layout>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
