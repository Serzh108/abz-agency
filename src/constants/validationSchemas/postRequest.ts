import * as yup from 'yup';

export const postRequestSchema = yup.object({
  name: yup
    .string()
    .required('name is required')
    .min(8, 'need more than 8 characters')
    .max(32, 'need less than 32 characters'),
  // .min(8, REGEXP.password.mes.mismatchLessSymbols)
  // .max(32, REGEXP.password.mes.mismatchMoreSymbols),
  email: yup
    .string()
    .required('email is required'),
  phone: yup
    .string()
    .required('phone is required'),
  position_id: yup
    // .number()
    .string()
    .required('position is required'),
  photo: yup
    .string(),
  // .required('photo is required'),
});