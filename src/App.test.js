import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);
  // Find an element with role and initial text 'change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  // expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe('Change to red');
});
 