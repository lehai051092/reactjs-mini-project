import axios from "axios";
import api from "../constants/api";

const axiosClient = axios.create({
  baseURL: api.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const {config, status, data} = error.response;
  const URLS = [api.REGISTER_API, api.LOGIN_API];

  if (URLS.includes(config.url) && status === 400) {
    const dataMessage = data.message;
    const messages = dataMessage.length > 0 ? dataMessage[0].messages : [];
    const firstMessage = messages.length > 0 ? messages[0].message : [];

    throw new Error(firstMessage);
  }
  return Promise.reject(error);
});

export default axiosClient;