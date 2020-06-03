import { StyleSheet } from 'react-native';
import { fonts, typography } from '../../base/typography';
import { colors } from '../../base/colors';

export const button = StyleSheet.create({
    touchable: {
        flex: 1,
        height: 'auto',
    },
    gradient: {
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
    },
    text: {
        ...typography.body,
        fontFamily: fonts.semiBold,
        color: colors.white,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});
