import React, { useState, useEffect } from 'react';
import BackToTop from '@/components/top';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import ReactMarkdown from 'react-markdown'; // 解析 markdown
import remarkGfm from 'remark-gfm'; // markdown 对表格/删除线/脚注等的支持
import MarkNav from 'markdown-navbar'; // markdown 目录
import 'markdown-navbar/dist/navbar.css';
import 'github-markdown-css';
import dayjs from 'dayjs';
import Comment from '../comment';
const ArticleDetail = (props: any) => {
  // 文章列表
  const [list, setList] = useState([]);
  // 获取文章列表数据
  useEffect(() => {
    let articleId = props.match.params.id;
    props.BlogActions.asyncArticleAllListAction(1, 1).then((res: any) => {
      // 获取文章
      let { data } = res.data;
      let dataFilter = data.filter((item: any) => item._id === articleId);
      // 访问量
      let view = parseInt(dataFilter.map((item: any) => (item.views = item.views + 1)).join(''));
      props.BlogActions.asyncArticleViewsAction({
        views: view,
        id: articleId,
      }).then((res: any) => {
        return res;
      });
      setList(dataFilter);
    });
  }, [props.BlogActions, props.match]);

  return (
    <>
      <article className="w-[calc(100%-320px)]">
        {list.map((item: any, index: any) => {
          return (
            <div key={item._id}>
              <div className="flex justify-center items-center flex-col h-96">
                <h2>{item.title}</h2>
                <div>
                  <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                    {dayjs(item.updateTime * 1000).format('YYYY-MM-DD') === `1970-01-01`
                      ? dayjs(item.createTime * 1000).format('YYYY-MM-DD')
                      : dayjs(item.updateTime * 1000).format('YYYY-MM-DD')}
                  </span>
                  <span className="text-lg">评论({item.comment})</span>
                  <span className="text-lg">点赞({item.like})</span>
                  <span className="text-lg">访问量({item.views})</span>
                </div>
              </div>
              {/* 目录 */}
              <div className="flex flex-row">
                {/* 渲染 */}
                <div className="markdown-body content">
                  <ReactMarkdown children={item.content} remarkPlugins={[remarkGfm]} />
                </div>
              </div>
            </div>
          );
        })}
        <Comment title={list.map((item: any) => item.title)} />
      </article>
      <aside className="flex flex-col fixed right-20 top-40  rounded-2xl bg-white">
        {/* 目录 */}
        <p className="flex items-center h-10 text-lg font-medium px-3">目录</p>
        <span className="w-full border border-solid border-b-none border-t-0 border-l-0 border-r-0 border-gray-200"></span>
        <span></span>
        <div className="w-72">
          {list.map((item: any) => {
            return (
              <div key={item._id}>
                <MarkNav source={item.content} ordered={false} />
              </div>
            );
          })}
        </div>
        <BackToTop />
      </aside>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(ArticleDetail);
