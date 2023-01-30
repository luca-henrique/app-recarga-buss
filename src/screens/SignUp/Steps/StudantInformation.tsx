import React, {useEffect} from 'react';

import {messages} from '../../../locale';
import Label from '../../../components/atoms/Typography';
import {Container, StyledContainer} from '../../../components/atoms/Container';
import Button from '../../../components/atoms/Button/Contained';
import IconButton from '../../../components/atoms/Button/Icon';
import TextInput from '../../../components/atoms/Input';
import {View} from 'react-native';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

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

var radio_props = [
  {label: 'param1', value: 0},
  {label: 'param2', value: 1},
];

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
    register('cpf');
    register('password');
    register('passwordConfirmation');
  }, [register]);

  return (
    <Container justify="center" align="center" padding={30}>
      <StyledContainer direction="row" align="center">
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
        <View style={{padding: 8}} />
        <Label color="green-dark">Criar conta</Label>
      </StyledContainer>

      <View style={{padding: 30}} />

      <RadioForm radio_props={radio_props} initial={0} onPress={value => {}} />

      <View style={{padding: 6}} />

      <TextInput
        label="CPF (Somente números)"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="SENHA"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="CONFIRMAR SENHA"
        secureTextEntry={true}
        onChangeText={text => setValue('passwordConfirmation', text)}
        error={errors?.passwordConfirmation}
      />

      <View style={{padding: 22}} />

      <Button
        name="Exemple"
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Criar
      </Button>
    </Container>
  );
}

export default SignIn;
