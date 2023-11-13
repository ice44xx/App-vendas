import React from 'react';
import { TextProps, View } from 'react-native';
import { TextStyled } from './text.styled';

interface Props extends TextProps {
  title: string;
  fontSize?: number;
  color?: string;
  margin?: number;
}

const TextComponent: React.FC<Props> = ({ title, fontSize, color, margin, ...props }) => {
  return (
    <TextStyled margin={margin} color={color} fontSize={fontSize} {...props}>
      {title}
    </TextStyled>
  );
};

export default TextComponent;
