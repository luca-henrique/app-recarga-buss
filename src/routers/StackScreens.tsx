import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '~/screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )

}
