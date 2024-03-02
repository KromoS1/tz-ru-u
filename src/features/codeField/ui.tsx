import {BoxNumber} from '@src/shared';
import {FC, memo, useCallback, useMemo, useRef} from 'react';
import {Keyboard, Pressable, TextInput, View} from 'react-native';

type PropsType = {
  value: string;
  change: (text: string) => void;
  isError: boolean;
};

const arr = [1, 2, 3, 4, 5, 6];

export const CodeField: FC<PropsType> = memo(({value, change, isError}) => {
  const inputRef = useRef<TextInput | null>(null);

  const handlePress = () => {
    inputRef?.current?.focus();
  };

  const onChangeText = useCallback((text: string) => {
    if (text.length <= 6) {
      change(text);
    }
  }, []);

  const numbers = useMemo(() => {
    return arr.map((v, i) => {
      return (
        <BoxNumber key={v} isError={isError} num={value?.split('')[i] || ''} />
      );
    });
  }, [value, isError]);

  return (
    <View>
      <Pressable
        onPress={handlePress}
        style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {numbers}
      </Pressable>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        style={{position: 'absolute', top: -1000}}
        onBlur={Keyboard.dismiss}
      />
    </View>
  );
});
