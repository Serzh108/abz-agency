import axios from 'axios';
// import { BASE_URL } from '../constants';
// import { refresh } from './auth';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
// const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
// console.log('BASE_URL: ', BASE_URL);

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
  withCredentials: false,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


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
