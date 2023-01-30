import React from 'react';

import Label from '../../components/atoms/Label';
import {LinearGradientContainer} from '../../components/atoms/Container';

export const SplashScreen = ({navigation}: any) => {
  const initial = setTimeout(() => {
    navigation.navigate('SignIn');
  }, 5000);

  clearTimeout(initial);

  return (
    <LinearGradientContainer justify="center" align="center">
      <Label color="white-default">Recarga Buss</Label>
    </LinearGradientContainer>
  );
};
