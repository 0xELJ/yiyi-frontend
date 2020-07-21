import { StyleSheet } from 'react-native';

export const login = StyleSheet.create({
    safeArea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    logo: {
        marginTop: 35,
        alignSelf: 'center',
        height: 65,
        resizeMode: 'contain'
    },
    welcomeImg: {
        marginVertical: 60,
        alignSelf: 'center',
        width: '90%',
        height: 240,
        resizeMode: 'cover',
    }
});
