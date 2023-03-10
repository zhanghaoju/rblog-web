import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import dayjs from 'dayjs';
const TimeLine = (props: any) => {
  // 文章列表
  const [list, setList] = useState<any>([]);
  // 获取文章列表数据
  useEffect(() => {
    props.BlogActions.asyncArticleAllListAction(1, 1).then((res: any) => {
      // 获取文章
      let { data } = res.data;
      // 日期排序
      let sortTime = data.sort((curr: any, prev: any) => {
        return prev.createTime - curr.createTime;
      });
      // 格式化日期
      sortTime.map((item: any) => {
        item.createYear = dayjs(item.createTime * 1000).format('YYYY');
        item.createTime = dayjs(item.createTime * 1000).format('MM-DD');
      });
      // 分组
      let groupedBy = [];
      for (const item of data) {
        if (groupedBy[item.createYear]) {
          groupedBy[item.createYear].push(item);
        } else {
          groupedBy[item.createYear] = [item];
        }
      }
      // 数据处理
      let newArr = [];
      for (let i in groupedBy) {
        newArr.push({
          year: i,
          yearData: groupedBy[i],
        });
      }
      console.log('newArr', newArr);

      // 根据年份排序
      let sortData = newArr.sort((curr: any, prev: any) => {
        return prev.year - curr.year;
      });
      setList(sortData);
    });
  }, [props.BlogActions]);
  // 点击文章跳转到详情页面
  const handleClickTime = (id: any) => {
    props.history.push(`/rblog/article/detail/${id}`);
  };
  return (
    <div className="flex justify-center items-center flex-col w-1200 bg-blue-300 pb-5">
      {list.map((item: any) => {
        return (
          <div>
            <p className="pt-3 pb-2">{item.year}</p>
            <p className="w-800 border border-t-0 border-l-0 border-r-0 border-b-1 border-solid mb-1"></p>
            {item.yearData.map((it: any) => {
              return (
                <div
                  className="flex items-center py-2 hover:bg-yellow-200 cursor-pointer"
                  onClick={() => handleClickTime(it._id)}
                >
                  <span className="text-sm">{it.createTime}</span>
                  <span className="w-3 inline-block"></span>
                  <span className="text-sm">{it.title}</span>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* <div>
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
      </div> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(TimeLine);
