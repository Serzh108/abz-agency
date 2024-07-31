import * as yup from 'yup';

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

export const postRequestSchema = yup.object().shape({
  name: yup
    .string()
    .required(REGEXP.name.mess.required)
    .min(2, REGEXP.name.mess.lessSymbols)
    .max(60, REGEXP.name.mess.moreSymbols),
  email: yup
    .string()
    .required(REGEXP.email.mess.required)
    .email(REGEXP.email.mess.format)
    .matches(REGEXP.email.reg, REGEXP.email.mess.mismatch),

  phone: yup
    .string()
    .required(REGEXP.phone.mess.required)
    .matches(REGEXP.phone.reg, REGEXP.phone.mess.mismatch),
  position_id: yup
    .number()
    .positive()
    .required(REGEXP.position_id.mess.required)
    .min(1, REGEXP.position_id.mess.min),
  photo: yup
    .mixed()
    .required(REGEXP.photo.mess.required)
    .test("required", "You need to provide a file", (file) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (file && file as File) return true;
      return false;
    }),
  // .test("fileSize", "The file is too large", (file) => {
  //   //if u want to allow only certain file sizes
  //   return file && file?.size <= 5000000;
  // })
  // --- - ---
  // .test('required', 'You need to provide a photo', (file) => {
  // return file && file?.length > 0;
  // }),
  // .test('fileSize', 'The file is too large', (file) => {
  //   return file && file[0] && file[0].size <= 5000000; // 5MB
  // })
  // .test('fileType', 'Unsupported file format', (file) => {
  //   return file && file[0] && ['image/jpeg', 'image/png'].includes(file[0].type);
  // }),
});