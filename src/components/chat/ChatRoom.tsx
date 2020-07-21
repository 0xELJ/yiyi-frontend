import React from 'react';
import { KeyboardAvoidingView, Platform } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { connect } from "react-redux";
import { ChatState } from "../../types/states/ChatState";
import { sendMessage } from "../../actions";
import { ChatMessageList } from "./ChatMessageList";
import { ChatRoomProps } from '../../types/props/ChatRoomProps';
import { chatRoom } from '../../styles/components/chat/chatRoom';
import { MessageData } from '../../types/entities/MessageData';
import ChatForm from './ChatForm';
import { AuthState } from '../../types/states/AuthState';

const ChatRoom: React.FC<ChatRoomProps> = (props) => {
    const getKeyboardBehavior = () => {
        if (Platform.OS === "ios") {
            return 'padding';
        } else {
            return undefined;
        }
    };

    const onSendMessage = (values: MessageData) => {
        props.sendMessage(values.message);
    };

    return (
        <KeyboardAvoidingView behavior={getKeyboardBehavior()} keyboardVerticalOffset={72}>
            <Container style={chatRoom.container}>
                <Section style={chatRoom.messages}>
                    <ChatMessageList messages={props.chat.messages} currentUserId={props.userId} />
                </Section>
                <Section style={chatRoom.form}>
                    <ChatForm onSubmit={onSendMessage}/>
                </Section>
            </Container>
        </KeyboardAvoidingView>
    );
};

const mapStateToProps = (state: { chat: ChatState, auth: AuthState }) => {
    return { chat: state.chat, userId: state.auth.currentUser.id };
};

export default connect(mapStateToProps, { sendMessage })(ChatRoom);
