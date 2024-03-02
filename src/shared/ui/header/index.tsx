import {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const Header = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ecobice</Text>
    </View>
  );
});
