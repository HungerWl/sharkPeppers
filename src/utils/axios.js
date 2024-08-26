import axios from 'axios'
import { ElMessage } from 'element-plus'
import useAuth from '@/hooks/useAuth'

// 请求超时
const timeout = import.meta.env.VITE_API_TIMEOUT
// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: timeout ? Number.parseInt(timeout) : 0,
})

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
  const { token } = useAuth()
  // 请求头携带token
  config.headers.AUTH_TOKEN = token
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response, "response");
    // 此处相当于一次响应拦截
    if (response.status === 200) {
      return response.data;
    }
    ElMessage({
      message: response.message,
      type: 'error'
    });
    return response.data;
  },
  (error) => {
    const { response } = error;
    if (response) {
      ElMessage({
        message: response.status,
        type: 'error'
      });
      return Promise.reject(response.data);
    }
    ElMessage({
      message: '网络连接异常,请稍后再试!',
      type: 'error'
    });

  })
// 此处相当于二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = (config) => {
  return new Promise((resolve, reject) => {
    axiosInstance.request(config).then((res) => {
      const data = res; // 如果data.code为错误代码返回message信息
      resolve(data)
    });
  });
};
export function get(config, url, parms, type) {
  return requestInstance({ ...config, url, method: 'GET', params: parms, responseType: type });
}
export function post(config, url, data, type) {
  return requestInstance({ ...config, url, method: 'POST', data: data, responseType: type });
}
export function put(config, url, parms) {
  return requestInstance({ ...config, url, method: 'PUT', params: parms });
}
export function del(config, url, data) {
  return requestInstance({ ...config, url, method: 'DELETE', data: data });
}
