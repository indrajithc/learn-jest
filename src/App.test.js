import { render, screen } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);
  // Find an element with role and initial text 'change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
});
 
test('Button turns blue when click', ()=> {

});