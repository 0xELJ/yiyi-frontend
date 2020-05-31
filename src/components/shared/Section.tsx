import React from 'react';
import { View } from 'react-native';
import { ContainerProps } from "../../types/props/ContainerProps";
import { section } from '../../styles/components/shared/section';

export const Section: React.FC<ContainerProps> = ({ children, style }) => (
    <View style={[section.base, style]}>
        {children}
    </View>
);
