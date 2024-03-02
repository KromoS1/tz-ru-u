import {useForm} from 'react-hook-form';
import {PhoneFormType} from './types';
import {yupResolver} from '@hookform/resolvers/yup';
import {PhoneSchema} from './scheme';

export const usePhoneForm = () => {
  return useForm<PhoneFormType>({
    defaultValues: {
      phone: '',
    },
    resolver: yupResolver(PhoneSchema),
  });
};
