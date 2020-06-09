import { StyleSheet } from 'react-native';
import { typography } from '../../base/typography';
import { colors } from '../../base/colors';

export const headerStyles = StyleSheet.create({
    background: {
        flex: 1,
    },
    title: {
        ...typography.h2,
        color: colors.white,
    }
});
