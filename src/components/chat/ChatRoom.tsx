import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { ChatState } from "../../types/ChatState";
import { messageChanged, sendMessage } from "../../actions";
import { ChatMessageList } from "./ChatMessageList";

const ChatRoom: React.FC<any> = (props) => {
    const sendMessage = () => {
        props.sendMessage(props.chat.message);
        props.messageChanged('');
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={60}>
            <Container style={styles.container}>
                <Section style={styles.messages}>
                    <ChatMessageList messages={props.chat.messages} />
                </Section>
                <Section style={styles.inputContainer}>
                    <View style={styles.input}>
                        <InputField
                            hideLabel={true}
                            value={props.chat.message}
                            placeholder="Mensaje"
                            onChangeText={props.messageChanged}
                        />
                    </View>
                    <TouchableOpacity onPress={sendMessage} style={styles.icon}>
                        <MaterialIcons name="send" size={16} color="white" />
                    </TouchableOpacity>
                </Section>
            </Container>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
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

const mapStateToProps = (state: { chat: ChatState }) => {
    return { chat: state.chat };
};

export default connect(mapStateToProps, { messageChanged, sendMessage })(ChatRoom)
