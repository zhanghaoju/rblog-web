import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
const Category = (props: any) => {
  const [list, setList] = useState<any>([]);
  const { t } = qs.parse(props.location.search.slice(1));

  // 获取路由
  useEffect(() => {
    let tagsArticle = props.data;
    // 展开全部标签数据
    let newTags = tagsArticle.map((item: any) => item.tags);
    let newArr: any[] = [];
    for (let i = 0; i < newTags.length; i++) {
      newArr.push(...newTags[i]);
    }
    // 遍历去重
    let tagsArr = [];
    for (let i = 0; i < newArr.length; i++) {
      tagsArr.indexOf(newArr[i]) === -1 ? tagsArr.push(newArr[i]) : tagsArr;
    }
    // 转换为数组对象
    let i = 0;
    let tags = tagsArr.map((tag: any) => {
      return {
        name: tag,
        id: i++,
      };
    });

    setList(tags);
  }, [props.data]);
  const handleTags = (name: any) => {
    console.log('点击标签', name);
    props.history.push(`/rblog/tags?t=${name}`);
  };
  return (
    <div className="h-auto pb-3 rounded-xl mx-auto text-xl bg-sky-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
      <p className="py-2 pl-2 shadow-sm">全部标签</p>
      {list.map((item: any) => {
        return (
          <span
            className={`inline-block my-1 px-2 mx-2 text-ls bg-indigo-400 rounded-lg shadow  cursor-pointer
            ${
              item.name === t
                ? 'inline-block my-1 px-2 mx-2 text-ls rounded-lg shadow bg-yellow-300 cursor-pointer'
                : 'inline-block my-1 px-2 mx-2 text-ls rounded-lg shadow bg-indigo-400 cursor-pointer'
            }`}
            key={item.id}
            onClick={() => handleTags(item.name)}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
};

export default withRouter(Category);
