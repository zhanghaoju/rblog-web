import React, { useEffect, useState } from 'react';
import { createThrottle } from '@/utils/helpers';
import '@/App.css';
const BackToTop = () => {
  // 图标的显隐状态
  const [show, switchShow] = useState(false);

  useEffect(() => {
    const listener = createThrottle(() => {
      // console.log("window.scrollY",window.scrollY)
      const shouldShow = window.scrollY > 400;
      if (shouldShow !== show) {
        switchShow(shouldShow);
      }
    }, 10) as EventListener; // 事件监听器
    document.addEventListener('scroll', listener);
    // 组件销毁时，取消监听
    return () => document.removeEventListener('scroll', listener);
  }, [show]);

  return show ? <div className="top-jumper" onClick={() => window.scrollTo(0, 0)}></div> : null;
};

export default BackToTop;
