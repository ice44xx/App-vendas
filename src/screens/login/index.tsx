import React from 'react';
import { Container, Formgroup, ImageStyled } from './login.style';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';

const Login = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <Container>
      <ImageStyled source={require('../../assets/images/petlove_logo.png')} />
      <Formgroup>
        <Label text="E-mail ou Username" />
        <Input placeholderTextColor={'#c7c7c7'} placeholder="Digite seu username" />
      </Formgroup>
      <Formgroup>
        <Label text="Senha" />
        <Input
          /* errorMsg="E-mail ou Senha incorretos" */
          placeholderTextColor={'#c7c7c7'}
          placeholder="Digite sua senha"
        />
      </Formgroup>
      <Button marginTop={20} loading={false} title="Entrar" onPress={handleClick} />
    </Container>
  );
};

export default Login;
