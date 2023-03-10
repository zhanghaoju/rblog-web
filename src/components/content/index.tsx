import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import MyPagination from '@/components/pagination';
import { withRouter, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import qs from 'qs';

const Content = (props: any) => {
  // 文章列表
  const [list, setList] = useState([]);
  // 分页总数
  const [total, setTotal] = useState(0);
  // 当前第几页
  const [currentPage, setCurrentPage] = useState(1);
  // 每页显示条数
  const [pageSize, setPageSize] = useState(8);
  const { c } = qs.parse(props.location.search.slice(1));
  const { t } = qs.parse(props.location.search.slice(1));

  // 获取文章列表数据
  useEffect(() => {
    let category, tag;
    Boolean(c) === false ? (category = '') : (category = c);
    Boolean(t) === false ? (tag = '') : (tag = t);
    props.BlogActions.asyncArticleListAction(currentPage, pageSize, 1, 1, category, tag).then(
      (res: any) => {
        console.log('是否获取数据：', res);

        // 获取文章
        let { data, totalCount, page, pageSize } = res.data;
        setList(data);
        setTotal(totalCount);
        setCurrentPage(page);
        setPageSize(pageSize);
      }
    );
  }, [currentPage, pageSize, props.BlogActions, props.location.search]);
  // 跳转页数
  const onChangePage = (page: any, pageSize: any) => {
    let category, tag;
    Boolean(c) === false ? (category = '') : (category = c);
    Boolean(t) === false ? (tag = '') : (tag = t);
    // 重新调用接口将参数传递过去
    props.BlogActions.asyncArticleListAction(page, pageSize, 1, 1, category, tag).then(
      (res: any) => {
        // 获取列表数据
        let { data } = res.data;
        setList(data);
        // 切换行
        setCurrentPage(page);
        // 根据页面数据显示页码
        setPageSize(pageSize);
      }
    );
  };
  const handleTags = (name: any) => {
    console.log('点击标签', name);
    props.history.push(`/rblog/tags?t=${name}`);
  };
  const handleCategory = (name: any) => {
    console.log('点击分类', name);
    props.history.push(`/rblog/category?c=${name}`);
  };
  const handleArticle = (id: any) => {
    console.log('点击文章', props);
    props.history.push(`/rblog/article/detail/${id}`);
  };
  return (
    <div>
      {list.map((item: any) => {
        return (
          <div
            className="mb-5 rounded-3xl bg-blue-300 transition duration-500 ease-in-out  transform hover:-translate-x-3 hover:scale-105"
            key={item._id}
          >
            <div onClick={() => handleArticle(item._id)} className="cursor-pointer">
              <div className="flex flex-col px-2 h-12 text-2xl border">
                <span className="flex items-center justify-center py-2">{item.title}</span>
                <span className="border border-solid border-t-0 border-l-0 broder-r-0 border-gray-500"></span>
              </div>
              <div className="flex items-center h-36 px-2">
                <div className="flex items-center">
                  <img src={item.cover} alt="文章图片" className="w-48 h-32 rounded-xl" />
                </div>
                <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                  {item.introduction}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between h-12 px-2">
              <div>
                <span className="px-1 text-lg rounded-lg bg-slate-300">
                  {dayjs(item.updateTime * 1000).format('YYYY-MM-DD') === `1970-01-01`
                    ? dayjs(item.createTime * 1000).format('YYYY-MM-DD')
                    : dayjs(item.updateTime * 1000).format('YYYY-MM-DD')}
                </span>
              </div>
              <div className="flex items-center h-10">
                <span className="text-lg">评论({item.comment})</span>
                <span className="text-lg">点赞({item.like})</span>
                <span className="text-lg">
                  分类:
                  <span
                    className="mr-1 w-full px-1 text-lg  rounded-lg hover:bg-lime-400 bg-slate-300 cursor-pointer z-11"
                    onClick={() => handleCategory(item.categories)}
                  >
                    {item.categories}
                  </span>
                </span>
                <span className="text-lg">
                  标签:
                  {item.tags.map((it: any, i: any) => {
                    return (
                      <span
                        className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer hover:bg-lime-400"
                        key={it}
                        onClick={() => handleTags(it)}
                      >
                        {it}
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <MyPagination
        pageSize={pageSize}
        currentPage={currentPage}
        total={total}
        onChange={onChangePage}
      ></MyPagination>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(Content));
