import React from 'react';
import { View } from 'react-native';
import { ContainerLogin, Formgroup } from './login.style';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';

const Login = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <View>
      <ContainerLogin>
        <Formgroup>
          <Label text="E-mail ou Username" />
          <Input placeholderTextColor={'#c7c7c7'} placeholder="Digite seu username" />
        </Formgroup>
        <Formgroup>
          <Label text="Senha" />
          <Input placeholderTextColor={'#c7c7c7'} placeholder="Digite sua senha" />
        </Formgroup>
        <Button loading={false} title="Entrar" onPress={handleClick} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
