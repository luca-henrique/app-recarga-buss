import React, {useEffect} from 'react';

import {messages} from '../../validations/messages';
import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import Button from '../../components/atoms/Button/Contained';
import IconButton from '../../components/atoms/Button/Icon';
import TextInput from '../../components/atoms/Input';
import {View} from 'react-native';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const schema = yup
  .object({
    name: yup.string(),
    cpf: yup
      .string()
      .required(messages.required)
      .matches(
        /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
        'Informe um CPF valido',
      ),
    password: yup
      .string()
      .min(6, messages.min6)
      .max(20, messages.max20)
      .required(messages.required),
    passwordConfirmation: yup
      .string()
      .test(
        'passwords-match',
        'As senhas devem se corresponder',
        function (value) {
          return this.parent.password === value;
        },
      ),
  })
  .required();

function SignIn({navigation}) {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('name');
  }, [register]);

  return (
    <Container align="center" padding={30}>
      <StyledContainer direction="row" align="center">
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
        <View style={{padding: 8}} />
        <Label color="green-dark">Recuperar Conta</Label>
      </StyledContainer>

      <TextInput
        label="E-MAIL"
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 22}} />

      <Button
        name="Exemple"
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Enviar c??digo
      </Button>
    </Container>
  );
}

export default SignIn;
