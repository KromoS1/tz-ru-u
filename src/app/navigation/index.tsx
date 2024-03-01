import {createStackNavigator} from '@react-navigation/stack';
import {AuthFlow} from './flows/auth.flow';

const RootStack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={'AUTH'} component={AuthFlow} />
    </RootStack.Navigator>
  );
};
