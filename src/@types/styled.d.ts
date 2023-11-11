import 'styled-components/native';

import {colorsPalette} from '../common/colors';

declare module 'styled-components/native' {
  export type ColorsPalette = colorsPalette;

  export interface DefaultTheme {
    colors: {
      'green-light': string;
      'green-default': string;
      'green-dark': string;
      'green-800': string;
      'white-100': string;
      'white-light': string;
      'white-default': string;
      'white-dark': string;
      'gray-100': string;
      'gray-200': string;
      'gray-300': string;
      'gray-400': string;
      'gray-500': string;
      'gray-600': string;
      'gray-700': string;
      'gray-800': string;
      'red-light': string;
      'red-default': string;
      'red-dark': string;
      'yellow-light': string;
      'yellow-default': string;
      'yellow-dark': string;
    };
  }
}
