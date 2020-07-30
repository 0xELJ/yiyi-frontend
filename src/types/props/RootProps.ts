import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';

type RootScreenNavProp = DrawerNavigationProp<RootStackParamList, 'Login'>;

export interface RootProps {
    navigation: RootScreenNavProp;
}
