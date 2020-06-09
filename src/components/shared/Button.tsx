import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from "../../types/props/ButtonProps";
import { button } from '../../styles/components/shared/button';
import MainGradient from './MainGradient';

export const Button: React.FC<ButtonProps> = ({ onPress, children, type= 'text' }) => {
    const renderChildren = () => {
        if (type === 'text') {
            return <Text style={button.text}>{children}</Text>;
        }

        return children;
    };

    return (
        <TouchableOpacity onPress={onPress} style={button.touchable}>
            <MainGradient style={button.gradient}>
                {renderChildren()}
            </MainGradient>
        </TouchableOpacity>
    );
};
