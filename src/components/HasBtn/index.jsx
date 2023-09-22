import React from 'react';
//按钮权限
const HasBtn = ({ has, children }) => {
  // const { has, children } = props;
  const hasData = (value) => {
    let isExist = false;
    let buttonPermStr = localStorage.getItem('bpc') ?? '[]';
    if (buttonPermStr === undefined || buttonPermStr === null) {
      return false;
    }
    let buttonPerms = JSON.parse(buttonPermStr);
    const permissionFlag = value;
    isExist = buttonPerms.some((per) => {
      return permissionFlag?.includes(per);
    });
    return isExist;
  };

 // return <>{hasData(has) ? <div>{children}</div> : null}</>;
   return <div>{children}</div>;
};
export default HasBtn;
