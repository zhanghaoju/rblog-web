import { message } from 'antd';
import axios from 'axios';
// 配置超时时间和跨域携带凭证
axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true;
// 请求拦截器
axios.interceptors.request.use(
  // 请求前响应
  (config: any) => {
    let token: any = localStorage.getItem('token');
    // console.log('获取token', token);
    // 写到请求头上
    token && (config.headers.Authorization = 'Bearer ' + token);
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
axios.defaults.validateStatus = (status: any) => /^(2|3)\d{2}$/.test(status);

axios.interceptors.response.use(
  // 隐藏loading
  response => {
    return response.data;
  },
  error => {
    let { response } = error;
    let errMessage = '未知错误';
    if (response) {
      // 返回错误结果
      switch (response.status) {
        case 400:
          errMessage = '错误的请求';
          break;
        case 401:
          errMessage = '未授权，请重新登录';
          localStorage.removeItem('token');
          // 退出登录
          window.location.href = '#/admin/login';
          break;
        case 403:
          errMessage = '拒绝访问';
          break;
        case 404:
          errMessage = '404请求错误,未找到该资源';
          break;
        case 405:
          errMessage = '请求方法未允许';
          break;
        case 408:
          errMessage = '请求超时';
          break;
        case 500:
          errMessage = '服务器端出错';
          break;
        case 501:
          errMessage = '网络未实现';
          break;
        case 502:
          errMessage = '网络错误';
          break;
        case 503:
          errMessage = '服务不可用';
          break;
        case 504:
          errMessage = '网络超时';
          break;
        case 505:
          errMessage = 'http版本不支持该请求';
          break;
        default:
          errMessage = `其他连接错误 --${response.status}`;
      }
    } else {
      // 没有返回||断网
      if (!window.navigator.onLine) {
        // 断网处理: 跳转到断网页面
        return;
      }
      return Promise.reject(error);
    }
    message.error(errMessage);
  }
);

export default axios;
