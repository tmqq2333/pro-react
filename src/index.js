import React from 'react';
import { createRoot } from 'react-dom/client';
import BaseRouter from './router';
import './assets/style/index.scss';
import { Provider } from 'react-redux';
import store from './store/index';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
//日期为中文
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#32a9f6',
        },
      }}
    >
      <BaseRouter></BaseRouter>
    </ConfigProvider>
  </Provider>,
);
