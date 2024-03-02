import {BoxNumber} from '@src/shared';
import {FC, memo, useEffect, useMemo, useRef, useState} from 'react';
import {Control, Controller, UseFormWatch} from 'react-hook-form';
import {Keyboard, Pressable, TextInput, View} from 'react-native';

type PropsType = {
  value: string;
  change: (text: string) => void;
};

const arr = [1, 2, 3, 4, 5, 6];

export const CodeField: FC<PropsType> = memo(({value, change}) => {
  const inputRef = useRef<TextInput | null>(null);

  const handlePress = () => {
    inputRef?.current?.focus();
  };

  const numbers = useMemo(() => {
    return arr.map((v, i) => {
      return (
        <BoxNumber key={v} isError={false} num={value?.split('')[i] || ''} />
      );
    });
  }, [value]);

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
        onChangeText={change}
        style={{position: 'absolute', top: -1000}}
        onBlur={Keyboard.dismiss}
      />
    </View>
  );
});
