import React from 'react';

const HotArticles = () => {
  const handleLastUpdate = () => {
    console.log('最近更新');
  };
  return (
    <div className=" mt-5 rounded-xl mx-auto text-xl bg-sky-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
      <p className="py-2 pl-2 shadow-sm">热门文章</p>
      <span
        className="inline-block mb-1 mt-2 px-2 mx-1 text-base cursor-pointer"
        onClick={handleLastUpdate}
      >
        react页面滚动时导航栏的显示与隐藏react隐藏
      </span>
      <span
        className="inline-block mb-1 mt-2 px-2 mx-1 text-base cursor-pointer"
        onClick={handleLastUpdate}
      >
        react页面滚动时导航栏的显示与隐藏react隐藏
      </span>
      <span
        className="inline-block mb-1 mt-2 px-2 mx-1 text-base cursor-pointer"
        onClick={handleLastUpdate}
      >
        react页面滚动时导航栏的显示与隐藏react隐藏
      </span>
      <span
        className="inline-block mb-1 mt-2 px-2 mx-1 text-base cursor-pointer"
        onClick={handleLastUpdate}
      >
        react页面滚动时导航栏的显示与隐藏react隐藏
      </span>
      <span
        className="inline-block mb-1 mt-2 px-2 mx-1 text-base cursor-pointer"
        onClick={handleLastUpdate}
      >
        react页面滚动时导航栏的显示与隐藏react隐藏
      </span>
    </div>
  );
};

export default HotArticles;
