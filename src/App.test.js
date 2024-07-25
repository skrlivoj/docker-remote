import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React is awesome! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React is awesome!/i);
  expect(linkElement).toBeInTheDocument();
});
