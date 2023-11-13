import React from 'react';
import { ButtonStyled } from './button.styled';
import { ActivityIndicator, TextInputProps } from 'react-native';
import TextComponent from '../Text';

interface Props extends TextInputProps {
  title: string;
  loading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  marginTop?: number;
}

const Button: React.FC<Props> = ({ title, loading, disabled, marginTop, onPress, ...props }) => {
  const handlePress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  return (
    <ButtonStyled marginTop={marginTop} {...props} onPress={handlePress}>
      {loading ? (
        <ActivityIndicator color={'#101633'} />
      ) : (
        <TextComponent color="#101633" fontSize={25} title={title} />
      )}
    </ButtonStyled>
  );
};

export default Button;
