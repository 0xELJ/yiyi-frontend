import React from "react";
import { Text, View } from "react-native";
import { Message } from "../../types/entities/Message";
import Moment from "react-moment";

export const ChatMessage: React.FC<Message> = (props) => {
    return (
        <View>
            <Text>{props.username}</Text>
            <Text>{props.message}</Text>
            <Moment element={Text} format="L HH:mm:ss">
                {props.createdAt}
            </Moment>
        </View>
    );
};
