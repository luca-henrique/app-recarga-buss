import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './common/defaultTheme';

function App() {
  return <ThemeProvider theme={defaultTheme} />;
}

export default App;
