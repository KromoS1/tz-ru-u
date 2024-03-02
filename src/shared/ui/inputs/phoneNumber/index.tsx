import {globalStyle} from '@src/styles';
import {FC, PropsWithChildren, memo, useMemo} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

type PropsType = {
  value: string;
  isError?: boolean;
  isCheckCount?: boolean;
  change?: (text: string) => void;
};

export const PhoneNumber: FC<PropsWithChildren<PropsType>> = memo(
  ({value, isError, isCheckCount, change, children}) => {
    const {main} = globalStyle;

    const borderColor = useMemo(() => {
      const checkValue = !!isCheckCount ? value.length > 0 : false;
      return checkValue ? main.success : !isError ? main.color : main.error;
    }, [isError, value]);

    return (
      <View style={[styles.container, {borderColor}]}>
        {children}
        <TextInput value={value} onChangeText={change} style={styles.input} />
      </View>
    );
  },
);
