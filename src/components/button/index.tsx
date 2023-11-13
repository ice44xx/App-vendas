import React from 'react';
import { ButtonStyled } from './button.styled';
import { ActivityIndicator, TextInputProps } from 'react-native';
import TextComponent from '../Text';

interface Props extends TextInputProps {
  title: string;
  loading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ title, loading, disabled, onPress, ...props }) => {
  const handlePress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  return (
    <ButtonStyled {...props} onPress={handlePress}>
      {loading ? (
        <ActivityIndicator color={'#101633'} />
      ) : (
        <TextComponent fontSize={25} title={title} />
      )}
    </ButtonStyled>
  );
};

export default Button;
