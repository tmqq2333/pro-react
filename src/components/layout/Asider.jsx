import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;
const renderMenu = (menus) => {
  const list = [];
  menus.map((item) => {
    if (item?.hidden) return undefined;
    let lin = {
      label: item.title,
      key: item.path,
      icon: item.icon,
    };
    if (item.children) {
      let children = renderMenu(item.children);
      if (children.length) {
        lin['children'] = children;
      }
      list.push(lin);
    } else {
      list.push(lin);
    }
  });
  return list;
};

const Asider = (props) => {
  const { menus } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState([pathname]);
  const [openKeys, setOpenKeys] = useState(['/' + pathname.split('/')[1]]);
  const rootSubmenuKeys = [];
  useEffect(() => {
    if (menus[0] && menus[0].path) pathname === '/' && setSelectedKey([menus[0].path]);
  }, []);
  menus.forEach((item) => {
    if (item.children) {
      rootSubmenuKeys.push(item.path);
    }
  });
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (typeof latestOpenKey !== 'undefined' && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleClick = (e) => {
    navigate(e.key);
    setSelectedKey([e.key]);
  };
  const asiderMenu = renderMenu(menus);
  console.log('asiderMenu', asiderMenu);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        selectedKeys={selectedKey}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={handleClick}
        mode="inline"
        theme="dark"
        items={asiderMenu}
      />
    </Sider>
  );
};
export default Asider;
