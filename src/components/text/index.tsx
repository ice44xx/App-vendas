import React from 'react';
import { TextProps, View } from 'react-native';
import { TextStyled } from './text.styled';

interface Props extends TextProps {
  title: string;
  fontSize?: number;
}

const TextComponent: React.FC<Props> = ({ title, fontSize, ...props }) => {
  return (
    <TextStyled fontSize={fontSize} {...props}>
      {title}
    </TextStyled>
  );
};

export default TextComponent;
