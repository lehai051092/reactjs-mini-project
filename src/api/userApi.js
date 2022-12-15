import axiosClient from "./axiosClient";
import api from "../constants/api";

const userApi = {
  register(data) {
    const url = api.REGISTER_API;
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = api.LOGIN_API;
    return axiosClient.post(url, data);
  }
}

export default userApi;