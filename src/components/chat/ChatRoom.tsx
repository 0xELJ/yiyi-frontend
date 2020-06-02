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
        <KeyboardAvoidingView behavior={getKeyboardBehavior()} keyboardVerticalOffset={60}>
            <Container style={chatRoom.container}>
                <Section style={chatRoom.messages}>
                    <ChatMessageList messages={props.chat.messages} />
                </Section>
                <Section style={chatRoom.inputContainer}>
                    <ChatForm onSubmit={onSendMessage}/>
                </Section>
            </Container>
        </KeyboardAvoidingView>
    );
};

const mapStateToProps = (state: { chat: ChatState }) => {
    return { chat: state.chat };
};

export default connect(mapStateToProps, { sendMessage })(ChatRoom);
