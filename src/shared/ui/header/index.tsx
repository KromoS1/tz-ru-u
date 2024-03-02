import {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export const Header = memo(() => {
  const nav = useNavigation();

  const isCanGoBack = nav.canGoBack();

  const back = () => {
    nav.goBack();
  };

  return (
    <View style={styles.container}>
      {isCanGoBack && (
        <TouchableOpacity onPress={back}>
          <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            transform={[{rotate: '180deg'}]}>
            <Path
              d="M5 11L4 11L4 13L5 13L5 11ZM5 13L19 13L19 11L5 11L5 13Z"
              fill="#000"
            />
            <Path
              d="M12 5L19 12L12 19"
              stroke="#000"
              strokeWidth={2}
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </Svg>
        </TouchableOpacity>
      )}

      <View style={[styles.textBox, {paddingRight: isCanGoBack ? 30 : 0}]}>
        <Text style={styles.text}>ecobice</Text>
      </View>
    </View>
  );
});
