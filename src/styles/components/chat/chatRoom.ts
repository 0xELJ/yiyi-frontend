import { StyleSheet } from 'react-native';
import { colors } from '../../base/colors';

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
        height: 100,
        paddingTop: 16,
        paddingBottom: 50,
        justifyContent: 'center',
        backgroundColor: colors.greyLightTwo,
        marginBottom: 0,
    },
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        paddingHorizontal: 16,
        borderRadius: 100,
        backgroundColor: colors.greenDark
    }
});
