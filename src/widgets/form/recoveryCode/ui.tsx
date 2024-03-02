import {NextButton, Timer} from '@src/shared';
import {FC, memo, useEffect} from 'react';
import {Alert, View} from 'react-native';
import {useRecoveryCodeForm, useRecoveryCodeMutate} from './module';
import {Controller, SubmitHandler} from 'react-hook-form';
import {RecoveryCodeFormType} from './types';
import {CodeField} from '@src/features';

type PropsType = {
  phone: string;
  code: number;
};

export const RecoveryCodeForm: FC<PropsType> = memo(({phone, code}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useRecoveryCodeForm();

  const {mutate: sendCode, isError} = useRecoveryCodeMutate(phone);

  const isDisableBtn = !!errors.code || watch('code').length !== 6;

  const submit: SubmitHandler<RecoveryCodeFormType> = async data => {
    sendCode(data);
  };

  useEffect(() => {
    Alert.alert(`Введите код - ${code}`);
  }, []);

  return (
    <View style={{height: '55%', justifyContent: 'space-between'}}>
      <Controller
        control={control}
        name={'code'}
        render={({field: {onChange, value}}) => {
          return (
            <CodeField change={onChange} value={value} isError={isError} />
          );
        }}
      />
      <Timer
        milliseconds={240000}
        textBefore="Отправить код повторно через"
        textAfter="Отправить код повторно"
      />
      <View>
        <NextButton isDisable={isDisableBtn} press={handleSubmit(submit)} />
      </View>
    </View>
  );
});
