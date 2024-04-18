import React from 'react';
import renderer from 'react-test-renderer';
import { HomeScreen } from './HomeScreen';
import { render } from '@testing-library/react-native';

describe('render', () => {
  it('first render', () => {
    renderer.create(<HomeScreen />);
  });

  it('show text', async () => {
    const { getByText } = render(<HomeScreen />);
    const elementText = getByText('Example')
    expect(elementText).toBeTruthy()
  });
});
