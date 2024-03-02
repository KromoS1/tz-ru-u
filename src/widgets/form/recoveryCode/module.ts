import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';

import {RecoveryCodeFormType} from './types';
import {CodeSchema} from './scheme';

export const useRecoveryCodeForm = () => {
  return useForm<RecoveryCodeFormType>({
    defaultValues: {
      code: '',
    },
    resolver: yupResolver(CodeSchema),
  });
};
