import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { getInitMenuPath } from '@/utils/util';
const renderRoute = (menus) => {
  return menus.map((item) => {
    if (item.children) {
      return (
        <Route path={item.path} key={item.key}>
          {renderRoute(item.children)}
        </Route>
      );
    } else {
      return <Route path={item.path} key={item.key} element={<item.component />}></Route>;
    }
  });
};

const renderRedirect = (menus) => {
  if (menus[0] && menus[0].path) {
    return <Route path="/" element={<Navigate to={getInitMenuPath(menus)} />}></Route>;
  }
  return null;
};

export default function AppMain(props) {
  const { menus } = props;
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <Routes>
        {renderRoute(menus)}
        {renderRedirect(menus)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
