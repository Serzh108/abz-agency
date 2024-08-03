import * as yup from 'yup';
import { postRequestForm } from '../../types';

const REGEXP = {
  name: {
    mess: {
      required: 'name is required',
      lessSymbols: 'need more than 2 characters',
      moreSymbols: 'need less than 60 characters',
    }
  },
  email: {
    // reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.(?!ru))+[a-zA-Z]{2,3}))$/,
    // reg: /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    reg: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])$/,
    mess: {
      required: 'email is required',
      format: 'Invalid email format',
      mismatch: "Invalid email format",
      moreSymbols: 'need less than 100 characters',
    },
  },
  phone: {
    // reg: /^[\+]{0,1}380([0-9]{9})$/,
    reg: /^\+380\d{9}$/,
    mess: {
      required: 'phone is required',
      mismatch: "Invalid phone format",
    },
  },
  position_id: {
    mess: {
      required: 'position is required',
      min: 'position must be 1 or greater',
    }
  },
  photo: {
    mess: {
      required: 'photo is required',
      format: 'Invalid file format',
      mismatch: "Invalid file format",
    }
  },
};

export const postRequestSchema: yup.ObjectSchema<postRequestForm> = yup.object({
  name: yup
    .string()
    .required(REGEXP.name.mess.required)
    .min(2, REGEXP.name.mess.lessSymbols)
    .max(60, REGEXP.name.mess.moreSymbols),
  email: yup
    .string()
    .required(REGEXP.email.mess.required)
    .email(REGEXP.email.mess.format)
    .max(100, REGEXP.name.mess.moreSymbols)
    .matches(REGEXP.email.reg, REGEXP.email.mess.mismatch),

  phone: yup
    .string()
    .required(REGEXP.phone.mess.required)
    .matches(REGEXP.phone.reg, REGEXP.phone.mess.mismatch),
  position_id: yup
    .number()
    .required(REGEXP.position_id.mess.required)
    .min(1, REGEXP.position_id.mess.min),
  photo: yup
    .mixed()  // 
    // .mixed<File[]>()
    // .mixed<FileList>()
    .required(REGEXP.photo.mess.required)
    .test('fileSize', 'The file is too large', (value) => {
      // const fileList = value as File[];
      const fileList = value as FileList;
      return fileList && fileList[0] && fileList[0].size <= 5 * 1024 * 1024; // 5MB
    })
    .test('fileType', 'Unsupported file format', (value) => {
      // const fileList = value as File[];
      const fileList = value as FileList;
      return fileList && fileList[0] && ['image/jpeg', 'image/jpg'].includes(fileList[0].type);

    }),
}) as yup.ObjectSchema<postRequestForm>;