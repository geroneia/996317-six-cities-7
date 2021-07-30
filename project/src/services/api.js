import axios from 'axios';
import {HttpCode} from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED:
        onUnauthorized();
        break;
      default:
        throw err;
    }
    throw err;
  };


  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
