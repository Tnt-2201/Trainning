/* eslint-disable prettier/prettier */
import axios from 'axios';

const getDataBody = config => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}$`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }
  return data;
};
axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__) {
      console.log(config);
    }
    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    if (__DEV__) {
      console.log(response);
    }

    return response;
  },
  error => {
    if (__DEV__) {
      console.log(error);
    }
    return Promise.reject(error);
  },
);

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwiaWF0IjoxNjM0MTE0MTQ5LCJleHAiOjE2MzQxNjgxNDl9.xaUligTK6i0z0_RZeliWRzg-5HJ8Maea9VffgQxrlO4';
axios.defaults.baseURL =
  'http://imsonline.thietkewebsite.info.vn/api/v1/staging';
export default class authAxios {
  static generateHeader(headers) {
    let options = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return options;
  }
  static async post(url, body, params) {
    try {
      return await axios
        .post(url, body, {
          headers: {
            post: this.generateHeader('urlencoded'),
          },
          params: params,
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }
  static async postConfig(url, body, config, params) {
    try {
      const configAxios = axios.create({
        baseURL: '',
      });
      const configHeaders =
        config.toLowerCase() === 'urlencoded' ? 'urlencoded' : 'json';
      return await configAxios
        .post(url, body, {
          headers: {
            post: this.generateHeader(configHeaders),
          },
          params: params,
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }
}
