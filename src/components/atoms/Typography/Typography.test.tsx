import React from 'react';
import renderer from 'react-test-renderer';
import { Typography } from './Typography';
import { render } from '@testing-library/react-native';

describe('render', () => {
  it('first render', () => {
    renderer.create(<Typography>aqui</Typography>);
  });

  // it('show text', () => {
  //   const { getByText } = render(<HomeScreen />);
  //   const elementText = getByText('Example')
  //   expect(elementText).toBeTruthy()
  // });
});
