import { AxiosResponse } from 'axios';
import {
  axiosPrivate,
  axiosPublic
} from './axios.api.config';
import { INewUser, IPosinions, IToken, IUsers, postRequestForm } from '../types';

type T =
  | IToken
  | undefined;


export const getToken = async (endpoint: string): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await axiosPublic.get(endpoint);
    // console.log(' --- data - > ', data);
    return data;
  } catch (error) {
    console.log(error);
    // return error;
  }
};

type U =
  | IUsers
  | undefined;

export const getUsers = async (endpoint: string): Promise<U> => {
  try {
    // const { users }: AxiosResponse<U> = await axiosPrivate.get(endpoint);
    const { data }: AxiosResponse<U> = await axiosPublic.get(endpoint);
    // console.log(' --- users data - > ', data);
    return data;
  } catch (error) {
    console.log(error);
    // return error;
  }
};

type P =
  | IPosinions
  | undefined;

export const getPositions = async (endpoint: string): Promise<P> => {
  try {
    const { data }: AxiosResponse<P> = await axiosPublic.get(endpoint);
    // console.log(' --- positions data - > ', data);
    return data;
  } catch (error) {
    console.log(error);
    // return error;
  }
};

type NU =
  | INewUser
  | undefined;

export const createUser = async (endpoint: string, formData: postRequestForm): Promise<NU> => {
  try {
    console.log(' ----- newUser formData - > ', formData);
    const { data }: AxiosResponse<NU> = await axiosPrivate.post(endpoint, formData);
    console.log(' --- newUser data - > ', data);
    return data;
  } catch (error) {
    console.log(error);
    // return error;
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
//     const result = await getToken(endpoint);
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