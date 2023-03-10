import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const LastUpdate = (props: any) => {
  const [lastData, setLastData] = useState([]);
  useEffect(() => {
    let lastUpdateData = props.data.sort((curr: any, prev: any) => {
      return prev.createTime - curr.createTime;
    });
    let newLastUpdate = lastUpdateData.slice(0, 6);
    setLastData(newLastUpdate);
  }, [props.data]);
  const handleLastUpdate = (id: any) => {
    props.history.push(`/rblog/article/detail/${id}`);
  };
  return (
    <div className=" mt-5 rounded-xl mx-auto text-xl bg-sky-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
      <p className="py-2 pl-2 shadow-sm">最近更新</p>
      {lastData.map((item: any) => {
        return (
          <div key={item._id}>
            <span
              className="inline-block mb-1 mt-2 px-2 mx-1 text-base cursor-pointer"
              onClick={() => handleLastUpdate(item._id)}
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(LastUpdate);
