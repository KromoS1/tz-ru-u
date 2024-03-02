import {RecoveryCodeScreen, SignInScreen} from '@src/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATE} from '@src/entities';
import {Header} from '@src/shared';

const AuthStack = createStackNavigator();

export const AuthFlow = () => {
  const {SIGN_IN, RECOVERY_CODE} = NAVIGATE.AUTH;

  return (
    <AuthStack.Navigator screenOptions={{header: () => <Header />}}>
      {/* <AuthStack.Screen name={SIGN_IN} component={SignInScreen} /> */}
      <AuthStack.Screen name={RECOVERY_CODE} component={RecoveryCodeScreen} />
    </AuthStack.Navigator>
  );
};
