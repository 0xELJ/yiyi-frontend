import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContainerProps } from "../../types/ContainerProps";

export const Section: React.FC<ContainerProps> = ({ children, style }) => (
    <View style={[styles.containerStyle, style]}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 16,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
});
