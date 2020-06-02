import { StyleSheet } from 'react-native';

export const inputField = StyleSheet.create({
    container: {
        height: 45,
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 20,
        flex: 2
    },
    inputError: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});
