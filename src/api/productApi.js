import axiosClient from "./axiosClient";
import api from "../constants/api";

const productApi = {
  async getAll(params) {
    // Transform _page to _start
    const newParams = {...params};
    newParams._start = !params._page || params._page <= 1
      ? 0
      : (params._page - 1) * (params._limit || 50);
    // Remove un-needed key
    delete newParams._page;
    // Fetch product list + count
    const productList = await axiosClient.get(api.PRODUCT_API, {
      params:
      newParams
    });
    const count = await axiosClient.get(api.PRODUCT_COUNT_API, {
      params:
      newParams
    });
    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count
      }
    }
  }
};

export default productApi;
