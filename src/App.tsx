import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './common/defaultTheme';
import { Home } from './screens/Home/Home';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>);
}

export default App;
