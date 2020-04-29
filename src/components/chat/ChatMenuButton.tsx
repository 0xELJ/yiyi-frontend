import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";
import { ButtonProps } from "../../types/ButtonProps";

export const ChatMenuButton: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ paddingHorizontal: 16 }}>
            <AntDesignIcon name="team" size={24} color="black" />
        </TouchableOpacity>
    );
};
