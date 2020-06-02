import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { InputFieldProps } from "../../types/props/InputFieldProps";
import { inputField } from '../../styles/components/shared/inputField';

export const InputField: React.FC<InputFieldProps> = props => {
    const { onChangeText, onBlur, value, placeholder, secureTextEntry, touched, error } = props;

    const renderError = () => {
        if (touched && error) {
            return <Text style={inputField.inputError}>{error}</Text>
        }
        return null;
    };

    return (
        <View style={inputField.container}>
            <TextInput
                secureTextEntry={secureTextEntry || false}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                style={inputField.input}
            />
            {renderError()}
        </View>
    );
};
