import React from 'react';
import { LabelStyled } from './label.styled';
import { View } from 'react-native';

interface Props {
  text: string;
}

const Label: React.FC<Props> = ({ text }) => {
  return <LabelStyled>{text}</LabelStyled>;
};

export default Label;
