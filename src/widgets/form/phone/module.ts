import {useForm} from 'react-hook-form';
import {PhoneFormType} from './types';
import {yupResolver} from '@hookform/resolvers/yup';
import {PhoneSchema} from './scheme';
import {useMutation} from 'react-query';
import {KEY_REQUIRE, instance} from '@src/shared';
import {AxiosResponse} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATE} from '@src/entities';
import {Alert} from 'react-native';

export const usePhoneForm = () => {
  return useForm<PhoneFormType>({
    defaultValues: {
      phone: '',
    },
    resolver: yupResolver(PhoneSchema),
  });
};

export const useSignPhoneMutate = () => {
  const nav = useNavigation();

  let phone = '';

  return useMutation({
    mutationKey: KEY_REQUIRE.signPhone,
    mutationFn: (data: PhoneFormType) => {
      phone = data.phone;
      return instance
        .post<AxiosResponse>(`/auth/send-sms?phone=${data.phone}`)
        .then(res => res.data);
    },
    onSuccess: res => {
      nav.navigate(NAVIGATE.AUTH.RECOVERY_CODE, {phone, code: res.data});
    },
    onError: res => {
      Alert.alert(`${res}`);
    },
  });
};
