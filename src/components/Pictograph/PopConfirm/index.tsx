import React, { useEffect, useState } from 'react';
import { Popconfirm } from 'antd';

/**
 *   <PopConfirm desc="" title="" okFn=fn cancelFn=fn>
 *       content
 *   </PopConfirm>
 * */
export default function Fn(props: any) {
  const { children, title, desc, okFn, cancelFn } = props;
  const [disabled, setDisabled] = useState(false);
  const confirm = (e: any) => {
    e.stopPropagation();
    if (okFn instanceof Function) {
      okFn();
    }
  };
  useEffect(() => {
    if (children && children.props) {
      setDisabled(children.props.disabled);
    }
  }, [children]);
  const cancel = (e: any) => {
    e.stopPropagation();
    if (cancelFn instanceof Function) {
      cancelFn();
    }
  };
  return (
    <Popconfirm
      title={title || '提示'}
      description={desc || '确定执行此操作？'}
      onConfirm={confirm}
      onCancel={cancel}
      disabled={disabled}
      okText="确定"
      cancelText="取消"
    >
      {children}
    </Popconfirm>
  );
}
