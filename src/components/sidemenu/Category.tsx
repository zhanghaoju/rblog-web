import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
const Category = (props: any) => {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    let articleList = props.data;
    let newList = articleList.map((item: any) => {
      return {
        categories: item.categories,
        _id: item._id,
      };
    });
    // 分类的数量汇总
    let obj = {};
    for (let i = 0; i < newList.length; i++) {
      let item = newList[i].categories;
      obj[item] = obj[item] + 1 || 1;
    }

    // 将对象封装成数组对象格式
    let newArticles = [];
    let key = Object.keys(obj); // 取出当前对象的索引
    let values = Object.values(obj); // 取出当前对象的值
    let i = 1;
    let arrObj = key.map((item, index) => {
      return {
        count: values[index], // values是一个数组，加index是为了拿到跟索引同个位置的值
        name: item,
        id: i++,
      };
    });
    newArticles = arrObj;

    setList(newArticles);
  }, [props.data]);

  const handleCategory = (name: any) => {
    props.history.push(`/rblog/category?c=${name}`);
  };
  return (
    <div className="h-auto mt-5 pb-3 rounded-xl mx-auto text-xl bg-sky-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
      <p className="py-2 pl-2 shadow-sm">分类信息</p>
      {list.map((item: any, index: any) => {
        return (
          <p
            className="flex justify-between items-center h-8 m-3 px-3  text-base bg-indigo-400 rounded-lg shadow cursor-pointer"
            key={index}
            onClick={() => handleCategory(item.name)}
          >
            <span>{item.name}</span>
            <span>{item.count}</span>
          </p>
        );
      })}
    </div>
  );
};

export default withRouter(Category);
