import React from 'react';

const TimeLine = () => {
  return (
    <div className="flex justify-center items-center flex-col w-1200 bg-blue-300 pb-5">
      <div>
        <p className="pt-3 pb-2">2023年</p>
        <p className="w-800 border border-t-0 border-l-0 border-r-0 border-b-1 border-solid mb-1"></p>
        <div className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer">
          <span className="text-sm">月份03-07</span>
          <span className="w-3 inline-block"></span>
          <span className="text-sm">文章标题</span>
        </div>
        <div className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer">
          <span className="text-sm">月份03-07</span>
          <span className="w-3 inline-block"></span>
          <span className="text-sm">文章标题</span>
        </div>
        <div className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer">
          <span className="text-sm">月份03-07</span>
          <span className="w-3 inline-block"></span>
          <span className="text-sm">文章标题</span>
        </div>
      </div>
      <div>
        <p className="pt-3 pb-2">2022年</p>
        <p className="w-800 border border-t-0 border-l-0 border-r-0 border-b-1 border-solid mb-1"></p>
        <div className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer">
          <span className="text-sm">月份03-07</span>
          <span className="w-3 inline-block"></span>
          <span className="text-sm">文章标题</span>
        </div>
        <div className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer">
          <span className="text-sm">月份03-07</span>
          <span className="w-3 inline-block"></span>
          <span className="text-sm">文章标题</span>
        </div>
        <div className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer">
          <span className="text-sm">月份03-07</span>
          <span className="w-3 inline-block"></span>
          <span className="text-sm">文章标题</span>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
