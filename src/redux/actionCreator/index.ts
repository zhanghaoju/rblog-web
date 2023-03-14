import { message } from 'antd';
import api from '@/api';
import {
  ARTICLE_LIST,
  ARTICLE_ALL_LIST,
  ARTICLE_SEARCH_LIST,
  ARTICLE_VIEWS,
  ARTICLE_COMMENT_LIST,
  ARTICLE_COMMENT_INSERT,
  MESSAGE_LIST,
  MESSAGE_INSERT,
} from '@/redux/constants';
// 文章列表
export const asyncArticleListAction = (
  page: Number,
  pageSize: Number,
  status: Number,
  publishStatus: Number,
  categories: String,
  tags: String
) => {
  return async (dispatch: any) => {
    const res = await api.getArticleList(page, pageSize, status, publishStatus, categories, tags);
    // console.log('获取数据', res);
    dispatch({
      type: ARTICLE_LIST,
      articles: res,
    });
    return res;
  };
};
// 不含分页文章列表
export const asyncArticleAllListAction = (status: Number, publishStatus: Number) => {
  return async (dispatch: any) => {
    const res = await api.getArticleAllList(status, publishStatus);
    dispatch({
      type: ARTICLE_ALL_LIST,
      articles: res,
    });
    return res;
  };
};
// 搜索的结果
export const asyncArticleSearchListAction = (
  status: Number,
  publishStatus: Number,
  title: String
) => {
  return async (dispatch: any) => {
    const res = await api.getArticleSearchList(status, publishStatus, title);
    dispatch({
      type: ARTICLE_SEARCH_LIST,
      articles: res,
    });
    return res;
  };
};
// 更新访问数量
export const asyncArticleViewsAction = (params: any) => {
  return async (dispatch: any) => {
    const res = await api.updateArticleViews(params);
    dispatch({
      type: ARTICLE_VIEWS,
      views: res,
    });
    return res;
  };
};
// 获取评论列表
export const asyncArticleCommentsAction = (page: Number, pageSize: Number, articleTitle: any) => {
  return async (dispatch: any) => {
    const res = await api.getArticleComments(page, pageSize, articleTitle);
    dispatch({
      type: ARTICLE_COMMENT_LIST,
      comments: res,
    });
    return res;
  };
};
// 新增评论
export const asyncArticleCommentInsertAction = (data: any) => {
  return async (dispatch: any) => {
    const res = await api.insertArticleComment(data);
    dispatch({
      type: ARTICLE_COMMENT_INSERT,
      comments: {},
    });
    return res;
  };
};
// 获取留言列表
export const asyncMessageListAction = (page: Number, pageSize: Number, auditStatus: any) => {
  return async (dispatch: any) => {
    const res = await api.getMessageList(page, pageSize, auditStatus);
    dispatch({
      type: MESSAGE_LIST,
      messages: res,
    });
    return res;
  };
};
// 新增留言
export const asyncMessageInsertAction = (data: any) => {
  return async (dispatch: any) => {
    const res = await api.insertMessage(data);
    dispatch({
      type: MESSAGE_INSERT,
      message: {},
    });
    return res;
  };
};
