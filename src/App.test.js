import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);
  // Find an element with role and initial text 'change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial condition', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');
  // check the button starts out disabled
  expect(colorButton).toBeEnabled();

  // check the checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();

});

test('Button enable and disable via checkbox toggle', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  // check checkbox
  fireEvent.click(checkbox);

  // expect the checkbox to be checked
  expect(checkbox).toBeChecked();

  // expect th button to be disabled
  expect(colorButton).toBeDisabled();

  // uncheck checkbox
  fireEvent.click(checkbox);

  // expect the checkbox to be unchecked
  expect(checkbox).not.toBeChecked();

  // expect the button to be enabled
  expect(colorButton).toBeEnabled();

});