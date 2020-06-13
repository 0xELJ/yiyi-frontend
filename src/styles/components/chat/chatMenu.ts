import { StyleSheet } from 'react-native';
import { typography } from '../../base/typography';
import { colors } from '../../base/colors';

export const chatMenu = StyleSheet.create({
    drawer: {
        width: '50%',
        backgroundColor: colors.greyLightTwo
    },
    container: {
        marginHorizontal: 16
    },
    h3: {
        ...typography.h3,
        marginLeft: 8
    },
    headerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
    },
    usersIcon: {
        color: colors.greyDarkOne
    },
    userList: {
        flexDirection: 'column',
        marginTop: 0,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: colors.greenDark
    },
    footer: {
        alignSelf: 'flex-end',
        marginBottom: 30,
        paddingHorizontal: 16
    },
    username: {
        ...typography.body
    }
});
