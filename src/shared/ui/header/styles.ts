import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '90%',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    color: '#000',
    letterSpacing: 4,
  },
});
