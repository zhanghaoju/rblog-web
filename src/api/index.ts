import axios from '@/utils/http';
declare module 'axios' {
  interface AxiosResponse {
    error: number;
    msg: string;
    code: number;
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}
// 接口请求
const api = {
  // 文章列表分页
  getArticleList(
    page: any,
    pageSize: any,
    status: any,
    publishStatus: any,
    categories: any,
    tags: any
  ) {
    return axios.get(
      `/iblog/article/list?page=${page}&&pageSize=${pageSize}&&status=${status}&&publishStatus=${publishStatus}&&categories=${categories}&&tags=${tags}`
    );
  },
  // 全部文章
  getArticleAllList(status: any, publishStatus: any) {
    return axios.get(`/iblog/article/all?status=${status}&&publishStatus=${publishStatus}`);
  },
  // 更新访问量
  updateArticleViews(params: any) {
    return axios.put(`/iblog/article/views/${params.id}`, params);
  },
  // 获取评论列表
  getArticleComments(page: any, pageSize: any, articleTitle: any, auditStatus: any) {
    return axios.get(
      `/iblog/article/comments?page=${page}&&pageSize=${pageSize}&&articleTitle=${articleTitle}&&auditStatus=${auditStatus}`
    );
  },
  // 新增评论
  insertArticleComment(params: any) {
    return axios.post(`/iblog/article/comments/insert`, params);
  },
  // 获取留言列表
  getMessageList(page: any, pageSize: any, auditStatus: any) {
    return axios.get(
      `/iblog/message/list?page=${page}&&pageSize=${pageSize}&&auditStatus=${auditStatus}`
    );
  },
  // 新增留言
  insertMessage(params: any) {
    return axios.post(`/iblog/message/insert`, params);
  },
};
export default api;
