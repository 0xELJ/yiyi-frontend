import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SpinnerProps } from "../../types/spinner.props";

export const Spinner: React.FC<SpinnerProps> = ({ size }) => (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size || 'large'}/>
    </View>
);

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
