import {FC, memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {globalStyle} from '@src/styles';

type PropsType = {
  num?: string;
  isError: boolean;
};

export const BoxNumber: FC<PropsType> = memo(({num, isError}) => {
  const {main} = globalStyle;

  const borderColor = useMemo(
    () => (!isError ? main.color : main.error),
    [isError],
  );

  return (
    <View style={[styles.box, {borderColor}]}>
      {num ? <Text>{num}</Text> : <View style={styles.line}></View>}
    </View>
  );
});
