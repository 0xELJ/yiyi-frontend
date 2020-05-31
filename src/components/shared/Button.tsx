import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from "../../types/props/ButtonProps";
import { button } from '../../styles/components/shared/button';

export const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
      <TouchableOpacity onPress={onPress} style={button.touchable}>
        <Text style={button.text}>{children}</Text>
      </TouchableOpacity>
  );
};
