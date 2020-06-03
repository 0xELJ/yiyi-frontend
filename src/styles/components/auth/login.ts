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
        marginVertical: 45,
        alignSelf: 'center',
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    }
});
