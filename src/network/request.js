import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  //请求拦截
  instance.interceptors.request.use(config => {
    // 1.config中的一些信息不符合服务器的要求

    // 2.每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3.某些网络请求（登录（token）），必须携带一些特殊的信息
    return config
  },err => {
    console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use(res => {
    // 只返回data，不返回额外附加的一些属性
    return res.data
  },err => {
    console.log(err);
  });

  return instance(config)
}