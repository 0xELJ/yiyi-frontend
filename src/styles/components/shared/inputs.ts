import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { borders } from '../../base/borders';
import { colors } from '../../base/colors';
import { typography } from '../../base/typography';
import { shadows } from '../../base/shadows';

export const inputContainer: ViewStyle = {
    minHeight: 40,
    flex: 1,
    flexDirection: 'column',
};

const dimensions: ViewStyle = {
    height: 40,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: colors.white,
};

export const inputs = StyleSheet.create({
    base: {
        ...dimensions,
        ...borders.greyLightOne,
    },
    error: {
        ...dimensions,
        ...borders.greyDarkOne,
        borderColor: colors.greenDark,
        color: colors.greyDarkOne,
        backgroundColor: 'rgba(0, 189, 86, 0.1)',
    },
    filled: {
        ...dimensions,
        ...borders.greyDarkOne,
        backgroundColor: colors.white
    },
    selected: {
        ...dimensions,
        ...borders.greenDark
    },
    rounded: {
        borderRadius: 100,
    },
});


export const errorText: TextStyle = {
    ...typography.body,
    color: 'red',
    marginTop: 5,
    marginLeft: 5
};
