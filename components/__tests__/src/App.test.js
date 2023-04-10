import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dba-app heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/dba-app/i);
  expect(linkElement).toBeInTheDocument();
});