import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SpinnerProps } from "../../types/props/SpinnerProps";
import { spinner } from '../../styles/components/shared/spinner';

export const Spinner: React.FC<SpinnerProps> = ({ size }) => (
    <View style={spinner.container}>
        <ActivityIndicator size={size || 'large'} />
    </View>
);
