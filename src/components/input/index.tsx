import React from 'react';
import { TextInputProps, View } from 'react-native';
import { InputStyled } from './input.styled';

interface Props extends TextInputProps {}

const Input: React.FC<Props> = (props) => {
  return <InputStyled {...props} />;
};

export default Input;
