import React from "react";
import { FlatList } from "react-native";
import { ChatMessage } from "./ChatMessage";
import { Message } from "../../types/entities/Message";

export const ChatMessageList: React.FC<{ messages: Message[], currentUserId: string }> = ({ messages, currentUserId }) => {
    if (!messages.length) {
        return null;
    }

    return (
        <FlatList
            data={messages}
            renderItem={({ item: { id, userId, username, message, createdAt }, index }) => {
                return (
                    <ChatMessage
                        id={id}
                        userId={userId}
                        username={username}
                        message={message}
                        createdAt={createdAt}
                        type={currentUserId === userId ? 'own' : 'external'}
                    />
                );
            }}
        />
    );
};
