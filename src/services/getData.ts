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
