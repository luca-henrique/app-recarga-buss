import React, {useEffect} from 'react';

import {Typography, Container, StyledContainer} from '../../components';

import Button from '../../components/atoms/Button/Contained';
import ButtonText from '../../components/atoms/Button/Text';
import TextInput from '../../components/atoms/Input';
import {View} from 'react-native';

import {signInScreenLogic} from './SignInScreenLogic';

export const SignInScreen = () => {
  const {setValue, handleSubmit, register, errors} = signInScreenLogic();

  useEffect(() => {
    register('cpf');
    register('password');
  }, [register]);

  function handleChangeFieldtext(value: string) {
    console.log(value);
  }

  return (
    <Container justify="center" align="center" padding={30}>
      <Typography color="green-dark">RecargaBuss</Typography>

      <View style={{padding: 26}} />

      <TextInput
        label="CPF:"
        onChangeText={handleChangeFieldtext}
        error={errors?.cpf}
        keyboardType="numeric"
        maxLength={11}
        mask
        type="cpf"
      />

      <View style={{padding: 4}} />

      <TextInput
        label="SENHA:"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 4}} />

      <StyledContainer align="flex-end">
        <ButtonText>Esqueceu a senha?</ButtonText>
      </StyledContainer>

      <View style={{padding: 8}} />

      <Button
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Entrar
      </Button>

      <View style={{padding: 8}} />

      <StyledContainer align="center">
        <Typography color="gray-400" variant="body1">
          Ainda não possui uma conta?
        </Typography>

        <View style={{padding: 6}} />

        <ButtonText color="green-default">Crie uma agora</ButtonText>
      </StyledContainer>
    </Container>
  );
};
