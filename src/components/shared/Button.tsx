import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonProps } from "../../types/props/ButtonProps";
import { button } from '../../styles/components/shared/button';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/base/colors';

export const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
      <TouchableOpacity onPress={onPress} style={button.touchable}>
          <LinearGradient colors={colors.greenGradient} start={[0, 0]} end={[1, 1]} style={button.gradient}>
              <Text style={button.text}>{children}</Text>
          </LinearGradient>
      </TouchableOpacity>
  );
};
