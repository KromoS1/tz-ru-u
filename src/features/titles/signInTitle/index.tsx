import {SubtitleTypography, TitleTypography} from '@src/shared';
import {memo} from 'react';
import {View} from 'react-native';
import styles from './styles';

export const SignInTitles = memo(() => {
  return (
    <View style={styles.container}>
      <TitleTypography title="Вход" />
      <SubtitleTypography subTitle="Введите номер телефона" />
    </View>
  );
});
