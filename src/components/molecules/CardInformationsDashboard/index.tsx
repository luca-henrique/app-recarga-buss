import React from 'react';
import {StyledContainer} from '../../atoms/Container/Container';
import {Typography} from '../../';
import {View} from 'react-native';

const CardInformationsDashboard = ({text, value, type}: any) => {
  return (
    <StyledContainer width={48} color="green-default" radius={6} padding={12}>
      <Typography color="white-default" variant="body2">
        {text}
      </Typography>
      <View style={{padding: 4}} />
      <Typography color="white-default" variant="h2">
        {type === 'money' ? `R$ ${value}` : value}
      </Typography>
    </StyledContainer>
  );
};

export default CardInformationsDashboard;
