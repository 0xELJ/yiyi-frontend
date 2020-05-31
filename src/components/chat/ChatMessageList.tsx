import React from "react";
import { Message } from "../../types/entities/Message";
import { ChatMessage } from "./ChatMessage";
import { FlatList } from "react-native";

export const ChatMessageList: React.FC<{ messages: Message[] }> = ({ messages }) => {
    if (!messages.length) {
        return null;
    }

    return (
        <FlatList
            data={messages}
            renderItem={({ item: { id, username, message, createdAt }, index }) => {
                return <ChatMessage id={id} username={username} message={message} createdAt={createdAt} />;
            }}
        />
    );
};
