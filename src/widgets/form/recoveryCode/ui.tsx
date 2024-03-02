import {NextButton} from '@src/shared';
import {memo} from 'react';
import {View} from 'react-native';
import {useRecoveryCodeForm} from './module';
import {Controller, SubmitHandler} from 'react-hook-form';
import {RecoveryCodeFormType} from './types';
import {CodeField} from '@src/features';

export const RecoveryCodeForm = memo(() => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useRecoveryCodeForm();

  const isDisableBtn = !!errors.code || watch('code').length !== 6;

  const submit: SubmitHandler<RecoveryCodeFormType> = async data => {};

  return (
    <View style={{height: '55%', justifyContent: 'space-between'}}>
      <Controller
        control={control}
        name={'code'}
        render={({field: {onChange, value}}) => {
          return <CodeField change={onChange} value={value} />;
        }}
      />

      <View>
        <NextButton isDisable={isDisableBtn} press={handleSubmit(submit)} />
      </View>
    </View>
  );
});
