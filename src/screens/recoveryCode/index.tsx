import {NAVIGATE, StackPropType} from '@src/entities';
import {ScreenTitles} from '@src/features';
import {RecoveryCodeForm} from '@src/widgets';
import {FC} from 'react';
import {View} from 'react-native';

type PropsType = StackPropType<typeof NAVIGATE.AUTH.RECOVERY_CODE>;

export const RecoveryCodeScreen: FC<PropsType> = ({route}) => {
  const {phone, code} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <ScreenTitles
        title="Введите код"
        subTitle="на ваш телефон должен прийти ков в смс"
      />
      <RecoveryCodeForm phone={phone} code={code} />
    </View>
  );
};
