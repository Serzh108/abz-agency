import axios from 'axios';
import { getToken } from './getData';
import { BASE_URL } from '../constants';
import { useTokenStore } from '../store/store';
// import { refresh } from './auth';

// const BASE_URL = process.env.REACT_APP_BASE_URL_API;
// const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
// console.log('BASE_URL: ', BASE_URL);

// const token = useTokenStore((state) => state.token);
// const token = '';

const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
  withCredentials: false,
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true,
});

// const receiveToken = async () => {
//   const token = await getToken('/token');
//   console.log(' -- token in axios.config = ', token);
//   return (token?.success ? token.token : false);
// };

const privateInterceptor = (config: any) => {
  // const token = receiveToken();
  const token = useTokenStore((state) => state.token);
  // if (!token) return config
  if (token) { config.headers.Authorization = `Bearer ${token}` }
  return config
};

axiosPrivate.interceptors.request.use(privateInterceptor);

export {
  axiosPublic,
  axiosPrivate
};

// axiosPublic.interceptors.response.use(
//   response => response,
//   async error => {
//     console.log(' - in interceptors: error -> ', error);
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         console.log('interceptor error?.response in try -> ', error?.response);
//         await refresh();

//         return await axiosPrivate(originalRequest);
//       } catch (error) {
//         // sessionStorage.removeItem(
//         //   `${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`,
//         // );
//         // return (window.location.href = "/");
//       }
//     }
//     return Promise.reject(error);
//   }
// );
