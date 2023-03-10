import { message } from 'antd';
import api from '@/api';
import {
  ARTICLE_LIST,
  ARTICLE_ALL_LIST,
  ARTICLE_VIEWS,
  ARTICLE_COMMENT_LIST,
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
export const asyncArticleCommentsAction = (
  page: Number,
  pageSize: Number,
  articleTitle: any,
  auditStatus: any
) => {
  return async (dispatch: any) => {
    const res = await api.getArticleComments(page, pageSize, articleTitle, auditStatus);
    dispatch({
      type: ARTICLE_COMMENT_LIST,
      comments: res,
    });
    return res;
  };
};
