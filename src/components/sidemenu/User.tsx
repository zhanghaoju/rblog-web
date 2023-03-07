import React from 'react';

const User = () => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-sky-300 transition duration-500 ease-in-out  transform  hover:scale-105">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/avatar.jpeg"
          alt=""
          className="w-24 h-24 mt-1 rounded-full"
        />
        <p className="flex items-center w-64 h-12 pl-2 mt-2  overflow-clip">
          座右铭座右铭座右铭座右铭座右铭座右铭座右铭
        </p>
      </div>
      <div className="flex justify-around w-64 h-20 pl-1 mt-2  rounded-xl overflow-clip">
        <p className="flex flex-col items-center justify-center w-12 h-12 bg-emerald-300">
          <span>文章</span>
          <span className="text-sm">110</span>
        </p>
        <p className="flex flex-col items-center justify-center w-12 h-12 bg-emerald-300">
          <span>分类</span>
          <span className="text-sm">10</span>
        </p>
        <p className="flex flex-col items-center justify-center w-12 h-12 bg-emerald-300">
          <span>标签</span>
          <span className="text-sm">20</span>
        </p>
      </div>
    </div>
  );
};

export default User;
