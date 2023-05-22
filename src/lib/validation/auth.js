import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('email is required')
    .min(1, 'email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(1, 'Password is required'),
});

export const resolver = yupResolver(loginSchema);
