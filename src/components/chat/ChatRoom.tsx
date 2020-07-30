import React from 'react';
import { KeyboardAvoidingView, Platform } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { sendMessage } from "../../actions";
import { ChatMessageList } from "./ChatMessageList";
import { chatRoom } from '../../styles/components/chat/chatRoom';
import { MessageData } from '../../types/entities/MessageData';
import ChatForm from './ChatForm';
import { useGlobalState } from '../../hooks/useGlobalState';
import { useActions } from '../../hooks/useActions';

const ChatRoom: React.FC = () => {
    const auth = useGlobalState(({ auth }) => auth);
    const chat = useGlobalState(({ chat }) => chat);
    const sendMsg = useActions(sendMessage, []);

    const getKeyboardBehavior = () => {
        if (Platform.OS === "ios") {
            return 'padding';
        } else {
            return undefined;
        }
    };

    const onSendMessage = (values: MessageData) => {
        sendMsg(values.message);
    };

    return (
        <KeyboardAvoidingView behavior={getKeyboardBehavior()} keyboardVerticalOffset={72}>
            <Container style={chatRoom.container}>
                <Section style={chatRoom.messages}>
                    <ChatMessageList messages={chat.messages} currentUserId={auth.currentUser.id} />
                </Section>
                <Section style={chatRoom.form}>
                    <ChatForm onSubmit={onSendMessage}/>
                </Section>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default ChatRoom;
