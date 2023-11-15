import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from './Home';
import { render } from '@testing-library/react-native';

describe('render', () => {
  it('first render', () => {
    renderer.create(<Home />);
  });

  it('show text', () => {
    const { getByText } = render(<Home />);
    const elementText = getByText('Example')
    expect(elementText).toBeTruthy()
  });
});
