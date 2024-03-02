import {NAVIGATE, StackPropType} from '@src/entities';
import {ScreenTitles} from '@src/features';
import {PhoneForm} from '@src/widgets';

import {FC} from 'react';
import {Text, View} from 'react-native';

type PropsType = StackPropType<typeof NAVIGATE.AUTH.SIGN_IN>;

export const SignInScreen: FC<PropsType> = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <ScreenTitles title="Вход" subTitle="Введите номер телефона" />
      <PhoneForm>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'gray'}}>Язык: Русский</Text>
        </View>
      </PhoneForm>
    </View>
  );
};
