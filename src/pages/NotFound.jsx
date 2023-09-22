import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Nofound } from './commpages.js';
export default function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate('/');
  };
  const message =
    '对不起，你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限你没有权限';
  return (
    <Nofound>
      <div className="wscn-http404">
        <div className="pic-404"></div>
        <div className="bullshit">
          <div className="bullshit__headline">{message}</div>
          <div className="bullshit__info">对不起，你没有权限</div>
          <a onClick={backToHome} className="bullshit__return-home">
            返回首页
          </a>
        </div>
      </div>
    </Nofound>
  );
}
