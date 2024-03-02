import {useTimer} from '@src/hooks';
import {FC, memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type PropsType = {
  textBefore: string;
  textAfter: string;
  milliseconds: number;
};

export const Timer: FC<PropsType> = memo(
  ({milliseconds, textBefore, textAfter}) => {
    const {time, mlseconds} = useTimer(milliseconds);

    return (
      <View style={styles.container}>
        {mlseconds == 0 ? (
          <Text style={[styles.text, styles.success]}>{textAfter}</Text>
        ) : (
          <Text style={styles.text}>
            {textBefore} {time}
          </Text>
        )}
      </View>
    );
  },
);
