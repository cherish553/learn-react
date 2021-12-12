import axios from "axios";
const request = axios.create({
  baseURL: "http://hmmm-api.itheima.net", // 基准路径
});
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("USER_TOKEN");
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 对响应错误做点什么
    console.log(error.message);
  }
);
const api = {
  get: (url: string, params: any) => request.get(url, { params }),
  post: request.post,
  put: request.put,
  delete: request.delete,
};
export default api;
