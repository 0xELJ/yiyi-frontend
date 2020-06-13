import { StyleSheet } from 'react-native';
import { colors } from '../../base/colors';
import { shadows } from '../../base/shadows';

export const chatRoom = StyleSheet.create({
    container: {
        paddingTop: 16,
        marginHorizontal: 0,
        paddingHorizontal: 15,
        backgroundColor: colors.greyLightTwo
    },
    messages: {
        flex: 1,
    },
    form: {
        height: 'auto',
        justifyContent: 'center',
        backgroundColor: colors.greyLightTwo,
        marginBottom: 30
    },
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        paddingHorizontal: 16,
        borderRadius: 100,
        backgroundColor: colors.greenDark,
        ...shadows.primary
    }
});
