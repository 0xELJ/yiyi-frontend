import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonProps } from "../../types/props/ButtonProps";

export const ChatMenuButton: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ marginRight: 16 }}>
            <MaterialIcons name="group" size={24} color="white" />
        </TouchableOpacity>
    );
};
