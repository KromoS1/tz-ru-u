import {NAVIGATE, StackPropType} from '@src/entities';
import {PhoneForm, SignInTitles} from '@src/features';
import {
  Flags,
  PhoneNumber,
  SubtitleTypography,
  TitleTypography,
} from '@src/shared';

import {FC} from 'react';
import {Text, View} from 'react-native';

type PropsType = StackPropType<typeof NAVIGATE.AUTH.SIGN_IN>;

export const SignInScreen: FC<PropsType> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <SignInTitles />
      <PhoneForm>
        <View style={{alignItems: 'center'}}>
          <Text>Язык: Русский</Text>
        </View>
      </PhoneForm>
    </View>
  );
};
