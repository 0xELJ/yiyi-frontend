import { StyleSheet } from 'react-native';
import { colors } from './colors';

const base = {
    borderWidth: 1,
    borderRadius: 4,
};

export const borders = StyleSheet.create({
    greenDark: { ...base, borderColor: colors.greenDark },
    greenLight: { ...base, borderColor: colors.greenLight },
    greyDarkOne: { ...base, borderColor: colors.greyDarkOne },
    greyLightOne: { ...base, borderColor: colors.greyLightOne },
});
