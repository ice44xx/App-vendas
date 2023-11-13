import React from 'react';
import { TextInputProps, View } from 'react-native';
import { InputStyled } from './input.styled';
import TextComponent from '../Text';

interface Props extends TextInputProps {
  errorMsg?: string;
}

const Input: React.FC<Props> = ({ errorMsg, ...props }) => {
  return (
    <View>
      <InputStyled {...props} />
      {errorMsg ? <TextComponent margin={5} fontSize={18} color="red" title={errorMsg} /> : ''}
    </View>
  );
};

export default Input;
