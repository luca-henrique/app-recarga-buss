import React from 'react';

import {useNavigationHook} from '../../hooks';

import {Typography, LinearGradientContainer} from '../../components';

export const SplashScreen = () => {
  const {navigation} = useNavigationHook();

  setTimeout(() => {
    navigation('SignInScreen');
  }, 3000);

  return (
    <LinearGradientContainer justify="center" align="center">
      <Typography color="white-default">Recarga Buss</Typography>
    </LinearGradientContainer>
  );
};
