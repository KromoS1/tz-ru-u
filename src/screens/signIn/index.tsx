import {NAVIGATE, StackPropType} from '@src/entities';
import {Flags, PhoneNumber} from '@src/shared';

import {FC} from 'react';
import {View} from 'react-native';

type PropsType = StackPropType<typeof NAVIGATE.AUTH.SIGN_IN>;

export const SignInScreen: FC<PropsType> = ({navigation}) => {
  const navRecovery = () => {
    navigation.navigate(NAVIGATE.AUTH.RECOVERY_CODE);
  };
  return <View></View>;
};
