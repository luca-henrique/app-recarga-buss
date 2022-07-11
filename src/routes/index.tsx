import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RecoveryAccount from '../screens/RecoveryAccount';

import DashboardTabBarNavigation from './TabBarNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="RecoveryAccount" component={RecoveryAccount} />
        <Stack.Screen name="Dashboard" component={DashboardTabBarNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
