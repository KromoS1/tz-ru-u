import {FC, memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type PropsType = {
  num?: number;
  isError: boolean;
};

const color = '#e5e5e5';
const colorError = '#fc4c4e';

export const BoxNumber: FC<PropsType> = memo(({num, isError}) => {
  const borderColor = !isError ? color : colorError;

  return (
    <View style={[styles.box, {borderColor}]}>
      {num ? <Text>{num}</Text> : <View style={styles.line}></View>}
    </View>
  );
});
