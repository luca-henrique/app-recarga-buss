import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './common/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreens } from './routers/StackScreens';


function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <StackScreens />
      </ThemeProvider>
    </NavigationContainer>);
}

export default App;
