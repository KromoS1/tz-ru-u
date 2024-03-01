import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ProviderPropsType} from '../types';

export const withSafeArea = (component: ProviderPropsType) => (props: any) => {
  return <SafeAreaProvider>{component(props)}</SafeAreaProvider>;
};
