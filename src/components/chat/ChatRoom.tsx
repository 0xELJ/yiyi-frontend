import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { ChatState } from "../../types/states/ChatState";
import { messageChanged, sendMessage } from "../../actions";
import { ChatMessageList } from "./ChatMessageList";
import { ChatRoomProps } from '../../types/props/ChatRoomProps';
import { chatRoom } from '../../styles/components/chat/chatRoom';

const ChatRoom: React.FC<ChatRoomProps> = (props) => {
    const onSendMessage = () => {
        props.sendMessage(props.chat.message);
        props.messageChanged('');
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={60}>
            <Container style={chatRoom.container}>
                <Section style={chatRoom.messages}>
                    <ChatMessageList messages={props.chat.messages} />
                </Section>
                <Section style={chatRoom.inputContainer}>
                    <View style={chatRoom.input}>
                        <InputField
                            hideLabel={true}
                            value={props.chat.message}
                            placeholder="Mensaje"
                            onChangeText={props.messageChanged}
                        />
                    </View>
                    <TouchableOpacity onPress={onSendMessage} style={chatRoom.icon}>
                        <MaterialIcons name="send" size={16} color="white" />
                    </TouchableOpacity>
                </Section>
            </Container>
        </KeyboardAvoidingView>
    );
};

const mapStateToProps = (state: { chat: ChatState }) => {
    return { chat: state.chat };
};

export default connect(mapStateToProps, { messageChanged, sendMessage })(ChatRoom);
