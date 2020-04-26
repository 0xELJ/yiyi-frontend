import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from "../../types/input-field.props";

export const InputField: React.FC<InputFieldProps> = props => {
    const { label = '', hideLabel = false, onChangeText, value, placeholder, secureTextEntry } = props;
    const { containerStyle, inputStyle, labelStyle } = styles;

    const renderLabel = () => {
        if (hideLabel) {
            return null;
        }
        return <Text style={labelStyle}>{label}</Text>;
    };

    return (
        <View style={containerStyle}>
            {renderLabel()}
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    containerStyle: {
        height: 45,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 20,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});
