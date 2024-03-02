import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';

import {RecoveryCodeFormType} from './types';
import {CodeSchema} from './scheme';
import {useMutation} from 'react-query';
import {KEY_REQUIRE, instance} from '@src/shared';
import {AxiosResponse} from 'axios';
import {Alert} from 'react-native';

export const useRecoveryCodeForm = () => {
  return useForm<RecoveryCodeFormType>({
    defaultValues: {
      code: '',
    },
    resolver: yupResolver(CodeSchema),
  });
};

export const useRecoveryCodeMutate = (phone: string) => {
  return useMutation({
    mutationKey: KEY_REQUIRE.recoveryCode,
    mutationFn: (data: RecoveryCodeFormType) => {
      return instance
        .post<AxiosResponse>(
          `/auth/check-code?phone=${phone}&code=${data.code}`,
        )
        .then(res => res.data);
    },
    onSuccess: res => {
      //@ts-ignore
      if (res.code == 200) {
        Alert.alert(`Аутентификация прошла успешно`);
      }
    },
  });
};
