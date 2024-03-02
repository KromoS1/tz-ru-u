import {Flags, NextButton, PhoneNumber, SubtitleTypography} from '@src/shared';
import {FC, PropsWithChildren, memo} from 'react';
import {View} from 'react-native';
import {usePhoneForm} from './module';
import {Controller, SubmitHandler} from 'react-hook-form';
import {PhoneFormType} from './types';

export const PhoneForm: FC<PropsWithChildren> = memo(({children}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = usePhoneForm();

  const submit: SubmitHandler<PhoneFormType> = async data => {
    console.log('data,', data);
  };

  return (
    <View style={{height: '55%', justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
        }}>
        <View style={{flexBasis: '25%', flexShrink: 1, flexGrow: 1}}>
          <PhoneNumber value="+7">
            <Flags />
          </PhoneNumber>
        </View>
        <View style={{flexBasis: '70%', flexShrink: 1, flexGrow: 1}}>
          <Controller
            control={control}
            name={'phone'}
            render={({field: {onChange, value}}) => (
              <PhoneNumber
                value={value}
                change={onChange}
                isError={!!errors.phone}
              />
            )}
          />
          {errors.phone && (
            <SubtitleTypography
              subTitle={errors.phone.message ?? ''}
              isError={!!errors.phone}
            />
          )}
        </View>
      </View>
      {children}
      <View>
        <NextButton isDisable={false} press={handleSubmit(submit)} />
      </View>
    </View>
  );
});
