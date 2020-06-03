import { colors } from './colors';
import { StyleSheet } from 'react-native';

const base = {
    shadowColor: colors.black,
    shadowOpacity: .12,
};

export const shadows = StyleSheet.create({
    primary: {
        ...base,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 4,
        elevation: 1
    },
    secondary: {
        ...base,
        shadowOffset: { width: -8, height: 12 },
        shadowRadius: 12,
        elevation: 2
    },
    tertiary: {
        ...base,
        shadowOpacity: .6,
        shadowOffset: { width: -7, height: 8 },
        shadowRadius: 15,
        elevation: 3
    }
});
