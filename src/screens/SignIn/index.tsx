import React, {useEffect} from 'react';

import {messages} from '../../locale';
import {Typography} from '../../components';
import {
  Container,
  StyledContainer,
} from '../../components/atoms/Container/Container';
import Button from '../../components/atoms/Button/Contained';
import ButtonText from '../../components/atoms/Button/Text';
import TextInput from '../../components/atoms/Input';
import {View} from 'react-native';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const schema = yup
  .object({
    cpf: yup.string().required(messages.required),
    password: yup
      .string()
      .min(6, messages.min6)
      .max(20, messages.max20)
      .required(messages.required),
  })
  .required();

const SignIn = ({navigation}: any) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('cpf');
    register('password');
  }, [register]);

  return (
    <Container justify="center" align="center" padding={30}>
      <Typography color="green-dark">RecargaBuss</Typography>

      <View style={{padding: 26}} />

      <TextInput
        Typography="CPF (Somente números)"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
        keyboardType="numeric"
        maxLength={11}
        mask
        type="cpf"
      />

      <View style={{padding: 4}} />

      <TextInput
        Typography="SENHA"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 4}} />

      <StyledContainer align="flex-end">
        <ButtonText onPress={() => navigation.navigate('RecoveryAccount')}>
          Esqueceu a senha?
        </ButtonText>
      </StyledContainer>

      <View style={{padding: 8}} />

      <Button
        onPress={handleSubmit(data => {
          console.log(data);
          navigation.navigate('Dashboard');
        })}>
        Entrar
      </Button>

      <View style={{padding: 8}} />

      <StyledContainer align="center">
        <Typography color="gray-400" variant="body1">
          Ainda não possui uma conta?
        </Typography>

        <View style={{padding: 6}} />

        <ButtonText
          color="green-default"
          onPress={() => navigation.navigate('SignUp')}>
          Crie uma agora
        </ButtonText>
      </StyledContainer>
    </Container>
  );
};

export default SignIn;
