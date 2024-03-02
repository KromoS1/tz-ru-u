import {SubtitleTypography, TitleTypography} from '@src/shared';
import {FC, memo} from 'react';
import {View} from 'react-native';
import styles from './styles';

type PropsType = {
  title: string;
  subTitle: string;
};

export const ScreenTitles: FC<PropsType> = memo(({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <TitleTypography title={title} />
      <SubtitleTypography subTitle={subTitle} />
    </View>
  );
});
