import {FC, memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import style from './styles';
import {globalStyle} from '@src/styles';

type PropsType = {
  subTitle: string;
  isError?: boolean;
  fontSize?: number;
};

export const SubtitleTypography: FC<PropsType> = memo(
  ({subTitle, isError, fontSize}) => {
    const {main} = globalStyle;

    const color = useMemo(
      () => (!isError ? main.color : main.error),
      [isError],
    );

    return (
      <View style={style.boxText}>
        <Text style={[style.subTitle, {color, fontSize}]}>{subTitle}</Text>
      </View>
    );
  },
);
