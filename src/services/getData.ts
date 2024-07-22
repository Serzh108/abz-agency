import { AxiosResponse } from 'axios';
import { axiosPrivate, axiosPublic } from './axios.api.config';
// import {
//   DiscountsPageProps,
//   IPriceData,
//   ITeachersPageProps,
//   IFAQPageProps,
//   IArticlesPageProps,
//   IReviewsPageProps,
//   IQuizzesProps,
//   IQuiz,
//   IReviewData,
//   IFAQData,
// } from '@/types';

type A =
  any;
// | DiscountsPageProps
// | IPriceData
// | ITeachersPageProps
// | IFAQPageProps
// | IArticlesPageProps
// | IReviewsPageProps
// | IReviewData
// | IQuizzesProps
// | IQuiz
// | IFAQData;

// export const getData = async <A>(endpoint: string): Promise<A> => {

export const getData = async (endpoint: string) => {
  try {
    // const { data }: AxiosResponse<A> = await axiosPublic.get(endpoint);
    // const { data }: AxiosResponse<A> = await axiosPublic.get('/token');
    const data1: AxiosResponse<A> = await axiosPublic.get('/token');
    console.log(' --- data1 - > ', data1)
    const data = '/token';
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// export const updateData = async <A>(endpoint: string, formData: A) => {
//   try {
//     const { data } = await axiosPrivate.put(endpoint, formData);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createData = async <A>(endpoint: string, formData: A) => {
//   try {
//     const { data } = await axiosPrivate.post(endpoint, formData);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteData = async (endpoint: string, id: string) => {
//   const url = `${endpoint}/${id}`;
//   try {
//     const { data } = await axiosPrivate.delete(url);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getPageData = async <A>(endpoint: string) => {
//   try {
//     const result = await getData(endpoint);
//     return result as A;
//   } catch (error) {
//     return { message: error };
//   }
// };

// // type P = IReviewData;

// export const updatePatchData = async <P>(endpoint: string, formData: P) => {

//   try {
//     const result = await axiosPrivate.patch(endpoint, formData);
//     // console.log(' !!! Update comment result ---> ', result);
//     return result.status;
//   } catch (error) {
//     console.error('Edit review error :', error);
//     // throw new Error('Failed to fetch invoice.');
//     return { message: error };
//   }
// };