import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
const menus = [
  {
    key: '0-0',
    path: '/list',
    title: '系统首页',
    icon: <AppstoreOutlined />,
    component: React.lazy(() => import('../pages/Home/List/List.jsx')),
  },
  {
    key: '0-1',
    path: '/edit',
    title: 'CSSUI',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '0-1-0',
        path: '/edit/car',
        title: '按钮',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Cssui/Btn/Edit.jsx')),
      },
    ],
  },
  {
    key: '0-2',
    path: '/means',
    title: '列表',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '0-2-2',
        path: '/means/df',
        title: '资料修改',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Register.jsx')),
      },
      {
        key: '0-2-3',
        path: '/means/work',
        title: '列表',
        icon: <AppstoreOutlined />,
        children: [
          {
            key: '0-2-3-0',
            path: '',
            title: '列表',
            hidden: true,
            // icon: <AppstoreOutlined />,
            component: React.lazy(() => import('../pages/LogList/Work/Work')),
          },
          // {
          //   key: '0-2-3-0',
          //   path: '/means/work/add',
          //   title: '列表新增',
          //   hidden: true,
          //   // icon: <AppstoreOutlined />,
          //   component: React.lazy(() => import('../pages/WorkAdd.jsx')),
          // },
        ],
      },
      {
        key: '0-2-4',
        path: '/means/look',
        title: '文章库',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/LogList/Work/Look')),
      },
    ],
  },
  {
    key: '0-3',
    path: '/statistics',
    title: '统计',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '0-3-0',
        path: '/statistics/sta',
        title: '统计图',
        // hidden: true,
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Statistics/Statistics.jsx')),
      },
      {
        key: '0-3-1',
        path: '/statistics/charts',
        title: '统计修改',
        // hidden: true,
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Statistics/Charts.jsx')),
      },
    ],
  },
  {
    key: '0-4',
    path: '/work',
    title: '功能',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '0-4-0',
        path: '/work/drag',
        title: '拖拽',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Func/Drag/Drag.jsx')),
      },
      {
        key: '0-4-1',
        path: '/work/means',
        title: '联动选择框',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Func/Means/Means.jsx')),
      },
      {
        key: '0-4-2',
        path: '/work/box',
        title: 'box',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('../pages/Func/Box/index.jsx')),
      },
    ],
  },
];

export default menus;
