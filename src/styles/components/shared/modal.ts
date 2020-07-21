import { StyleSheet } from 'react-native';
import { typography } from '../../base/typography';
import { colors } from '../../base/colors';

export const modal = StyleSheet.create({
    errorImg: {
        alignSelf: 'center',
        width: 180,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 15
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    headerText: {
        ...typography.h3,
    },
    bodyText: {
        ...typography.body,
        marginVertical: 15
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '80%',
        padding: 24,
        borderRadius: 16,
        backgroundColor: colors.white
    },
    action: {
        marginBottom: 0
    }
});
