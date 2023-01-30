import React from 'react';

import {useNavigationHook} from '../../hooks';

import {} from '../../components';

import Label from '../../components/atoms/Typography';
import {LinearGradientContainer} from '../../components/atoms/Container';

export const SplashScreen = () => {
  const {navigation} = useNavigationHook();

  setTimeout(() => {
    navigation('SignIn');
  }, 3000);

  return (
    <LinearGradientContainer justify="center" align="center">
      <Label color="white-default">Recarga Buss</Label>
    </LinearGradientContainer>
  );
};
