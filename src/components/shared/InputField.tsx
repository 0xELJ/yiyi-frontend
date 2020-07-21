import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { InputFieldProps } from "../../types/props/InputFieldProps";
import { inputContainer, errorText, inputs } from '../../styles/components/shared/inputs';
import { typography } from '../../styles/base/typography';

export const InputField: React.FC<InputFieldProps> = props => {
    const { onChangeText, onBlur, value, placeholder, secureTextEntry, touched, error, rounded = false } = props;
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (touched && error) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [touched, error]);

    const getInputStyles = () => {
        let styles;
        if (hasError) {
            styles = inputs.error;
        } else {
            styles = inputs.base;
        }
        if (rounded) {
            styles = { ...styles, ...inputs.rounded };
        }
        return styles;
    };

    const renderError = () => {
        if (hasError) {
            return <Text style={errorText}>{error}</Text>
        }
        return null;
    };

    return (
        <View style={inputContainer}>
            <View style={getInputStyles()}>
                <TextInput
                    secureTextEntry={secureTextEntry || false}
                    autoCorrect={false}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    style={typography.body}
                />
            </View>
            {renderError()}
        </View>
    );
};
