import React, { useEffect, useState } from 'react';
import '@/App.css';

function TopJumper() {
  // 显隐状态
  const [show, switchShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      switchShow(window.scrollY > 300);
    };
    document.addEventListener('scroll', listener);
    // 组件销毁后，取消监听
    return () => document.removeEventListener('scroll', listener);
  }, [show]);

  return show ? (
    <div className="top-jumper" onClick={() => window.scrollTo(0, 0)}>
      <span className="text"> </span>
    </div>
  ) : null;
}

export default TopJumper;
