import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContainerProps } from "../../types/container.props";

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
    return (
        <View style={[styles.containerStyle, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 16
    }
});
