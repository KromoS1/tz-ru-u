import {StackScreenProps} from '@react-navigation/stack';

type StringKeys<T> = Extract<keyof T, string>;

export type RootStackParamList = {
  'AUTH/SIGN_IN': {} | undefined;
  'AUTH/RECOVERY_CODE': {} | undefined;
};

export type StackPropType<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type NamesAllScreens = StringKeys<RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
