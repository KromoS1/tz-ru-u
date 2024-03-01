import {ProviderPropsType} from '../types';
import {NavigationContainer} from '@react-navigation/native';

export const withNavigation =
  (component: ProviderPropsType) => (props: any) => {
    return <NavigationContainer>{component(props)}</NavigationContainer>;
  };
