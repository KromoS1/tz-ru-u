import {FC, memo} from 'react';
import {Text, View} from 'react-native';
import style from './styles';

type PropsType = {
  title: string;
};

export const TitleTypography: FC<PropsType> = memo(({title}) => {
  return (
    <View style={style.container}>
      <View style={style.boxText}>
        <Text style={style.title}>{title}</Text>
      </View>
    </View>
  );
});
