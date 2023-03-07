import React from 'react';

const Category = () => {
  const handleCategory = () => {
    console.log('点击分类');
  };
  return (
    <div className="h-auto mt-5 pb-3 rounded-xl mx-auto text-xl bg-sky-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
      <p className="py-2 pl-2 shadow-sm">分类信息</p>
      <p
        className="flex justify-between items-center h-8 m-3 px-3  text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
        onClick={handleCategory}
      >
        <span>分类名称</span>
        <span>数量</span>
      </p>
      <p
        className="flex justify-between items-center h-8 m-3 px-3 text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
        onClick={handleCategory}
      >
        <span>分类名称</span>
        <span>数量</span>
      </p>
      <p
        className="flex justify-between items-center h-8 m-3 px-3 text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
        onClick={handleCategory}
      >
        <span>分类名称</span>
        <span>数量</span>
      </p>
      <p
        className="flex justify-between items-center h-8 m-3 px-3 text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
        onClick={handleCategory}
      >
        <span>分类名称</span>
        <span>数量</span>
      </p>
      <p
        className="flex justify-between items-center h-8 m-3 px-3 text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
        onClick={handleCategory}
      >
        <span>分类名称</span>
        <span>数量</span>
      </p>
      <p
        className="flex justify-between items-center h-8 m-3 px-3 text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
        onClick={handleCategory}
      >
        <span>分类名称</span>
        <span>数量</span>
      </p>
    </div>
  );
};

export default Category;
