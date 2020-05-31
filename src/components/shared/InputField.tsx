import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { InputFieldProps } from "../../types/props/InputFieldProps";
import { inputField } from '../../styles/components/shared/inputField';

export const InputField: React.FC<InputFieldProps> = props => {
    const { label = '', hideLabel = false, onChangeText, value, placeholder, secureTextEntry } = props;

    const renderLabel = () => {
        if (hideLabel) {
            return null;
        }
        return <Text style={inputField.label}>{label}</Text>;
    };

    return (
        <View style={inputField.container}>
            {renderLabel()}
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputField.input}
            />
        </View>
    );
};
