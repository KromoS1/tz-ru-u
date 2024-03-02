import {globalStyle} from '@src/styles';
import {FC, PropsWithChildren, memo, useMemo} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

type PropsType = {
  value: string;
  isError: boolean;
  change: (text: string) => void;
};

export const PhoneNumber: FC<PropsWithChildren<PropsType>> = memo(
  ({value, isError, change, children}) => {
    const {main} = globalStyle;

    const borderColor = useMemo(
      () => (!isError ? main.color : main.error),
      [isError],
    );

    return (
      <View style={[styles.container, {borderColor}]}>
        {children}
        <TextInput value={value} onChangeText={change} style={styles.input} />
      </View>
    );
  },
);
