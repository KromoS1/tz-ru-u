import {memo} from 'react';
import {Image} from 'react-native';

export const Flags = memo(() => {
  return (
    <Image
      source={require('../../../../assets/icon/ru-flag.png')}
      style={{width: 20, height: 20, margin: 5}}
    />
  );
});
