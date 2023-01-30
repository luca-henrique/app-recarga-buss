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

import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Estudantil', value: 0},
  {label: 'Expresso', value: 1},
];

const schema = yup
  .object({
    name: yup.string(),
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
    <Container padding={30}>
      <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
        <View style={{padding: 8}} />
        <Label color="green-dark">Criar conta</Label>
      </View>

      <TextInput
        label="Instituição de ensino"
        onChangeText={text => setValue('name', text)}
        error={errors?.name}
      />

      <StyledContainer color="white-light" padding={20}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {}}
          buttonColor={'#4EA45D'}
        />
      </StyledContainer>

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
