import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/base/colors';
import { ViewStyle } from 'react-native';

const MainGradient: FC<{ style: ViewStyle }> = props => (
    <LinearGradient colors={colors.greenGradient} start={[0, 0]} end={[1, 1]} style={props.style}>
        {props.children}
    </LinearGradient>
);

export default MainGradient;
