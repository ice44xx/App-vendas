import React from 'react';
import { TextInputProps, View } from 'react-native';
import { InputStyled } from './input.styled';

interface Props extends TextInputProps {
  className?: string;
}

const Input: React.FC<Props> = (className, props) => {
  return <InputStyled {...props} className={className} />;
};

export default Input;
