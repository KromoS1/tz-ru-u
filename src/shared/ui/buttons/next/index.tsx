import {FC, memo, useMemo} from 'react';

import {TouchableOpacity, View} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';
import styles from './style';
import {globalStyle} from '@src/styles';

type PropsType = {
  isDisable: boolean;
  press: () => void;
};

const size = 76;
const strokeWidth = 2;
const center = size / 2;
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

export const NextButton: FC<PropsType> = memo(({isDisable, press}) => {
  const {next} = globalStyle.button;

  const color = useMemo(
    () => (!isDisable ? next.default : next.disabled),
    [isDisable],
  );

  return (
    <View style={styles.boxButton}>
      <Svg width={size} height={size} fill={'transparent'}>
        <G origin={center}>
          <Circle
            stroke={color}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={press}
        style={[styles.button, {backgroundColor: color}]}
        activeOpacity={0.6}>
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <Path
            d="M5 11L4 11L4 13L5 13L5 11ZM5 13L19 13L19 11L5 11L5 13Z"
            fill="white"
          />
          <Path
            d="M12 5L19 12L12 19"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
});
