import {FC, memo} from 'react';
import {Text, View} from 'react-native';
import style from './styles';

type PropsType = {
  title: string;
  subTitle?: string;
};

export const TitleScreen: FC<PropsType> = memo(({title, subTitle}) => {
  return (
    <View style={style.container}>
      <View style={style.boxText}>
        <Text style={style.title}>{title}</Text>
      </View>
      {subTitle && (
        <View style={style.boxText}>
          <Text style={style.subTitle}>{subTitle}</Text>
        </View>
      )}
    </View>
  );
});
