import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  /** option name is the display text */
  const linkElement = screen.getByRole("link", { name : /learn react/i });
  expect(linkElement).toBeInTheDocument(); 
});
