import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi Lewis, I was changed on the feature branch!/i);
  expect(linkElement).toBeInTheDocument();
});