import React from 'react';
import { View } from 'react-native';
import { ContainerProps } from "../../types/props/ContainerProps";
import { container } from '../../styles/components/shared/container';

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
    return (
        <View style={[container.base, style]}>
            {children}
        </View>
    );
};
