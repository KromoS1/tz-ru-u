import {NAVIGATE, StackPropType} from '@src/entities';
import {FC} from 'react';
import {Text, View} from 'react-native';

type PropsType = StackPropType<typeof NAVIGATE.AUTH.RECOVERY_CODE>;

export const RecoveryCodeScreen: FC<PropsType> = () => {
  return (
    <View>
      <Text>Recovery</Text>
    </View>
  );
};
