import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const fonts = {
    regular: 'FiraSansRegular',
    semiBold: 'FiraSansSemiBold'
};

export const typography = StyleSheet.create({
    h1: {
        fontFamily: fonts.semiBold,
        color: colors.greyDarkOne,
        fontSize: 34,
        lineHeight: 50,
        textAlign: 'center'
    },
    h2: {
        fontFamily: fonts.semiBold,
        color: colors.greyDarkOne,
        fontSize: 26,
        lineHeight: 44,
        textAlign: 'center'
    },
    h3: {
        fontFamily: fonts.semiBold,
        color: colors.greyDarkOne,
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'center'
    },
    body: {
        fontFamily: fonts.regular,
        color: colors.greyDarkOne,
        fontSize: 14,
        lineHeight: 18
    },
    tiny: {
        fontFamily: fonts.semiBold,
        color: colors.greyDarkOne,
        fontSize: 9,
        lineHeight: 12
    }
});
