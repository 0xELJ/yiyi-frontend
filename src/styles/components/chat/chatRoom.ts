import { StyleSheet } from 'react-native';

export const chatRoom = StyleSheet.create({
    container: {
        height: '100%',
        padding: 0,
        paddingTop: 16,
    },
    messages: {
        flex: 1,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 5,
    },
    inputContainer: {
        height: 100,
        paddingTop: 16,
        paddingBottom: 64,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        marginBottom: 0,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        borderRadius: 100
    },
    icon: {
        height: 40,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderRadius: 100,
        backgroundColor: 'blue'
    }
});
