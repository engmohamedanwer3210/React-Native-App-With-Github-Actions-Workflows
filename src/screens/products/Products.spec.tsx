import React from 'react';
import { render } from '@testing-library/react-native';
import Products from './Products';

describe('Products', () => {
  it('renders a list of products', () => {
    const { getByTestId, getAllByText } = render(<Products />);

    const list = getByTestId('productsList');
    expect(list).toBeTruthy();
    // Check for some product names from the mock data
    expect(getAllByText(/Product [A-E]/).length).toBeGreaterThan(0);
  });
});
