import { CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

type LoginScreenNavProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Login'>, 
    DrawerNavigationProp<RootDrawerParamList>
>;

export interface LoginProps {
    navigation: LoginScreenNavProp;
}
