import React, { CSSProperties, useEffect, useState } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { Message } from "../../types/entities/Message";
import Moment from "react-moment";
import { messageContent, externalMsgText, ownMsgText } from '../../styles/components/chat/chatMessageStyles';

export const ChatMessage: React.FC<Message> = ({ username, message, createdAt, type = 'own' }) => {
    const [containerStyles, setContainerStyles] = useState<ViewStyle>({});
    const [textStyles, setTextStyles] = useState<{ [key: string]: TextStyle }>({});

    useEffect(() => {
        const { ownMsg, externalMsg } = messageContent;

        if (type === 'own') {
            setContainerStyles(ownMsg);
            setTextStyles(ownMsgText);
        } else if (type === 'external') {
            setContainerStyles(externalMsg);
            setTextStyles(externalMsgText);
        }
    }, []);

    return (
        <View style={containerStyles}>
            <Text style={textStyles.username}>{username}</Text>
            <Text style={textStyles.message}>{message}</Text>
            <Moment element={Text} format="L HH:mm:ss" date={createdAt} style={textStyles.date as CSSProperties} />
        </View>
    );
};
