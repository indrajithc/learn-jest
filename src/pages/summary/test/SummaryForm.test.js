import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event"

test("Initial condition", () => {
  render(<SummaryForm />);

  const termsAndConditionCheckbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  const orderConfirmButton = screen.getByRole("button", { name: /confirm order/i });

  // expect terms and condition to be unchecked initially 
  expect(termsAndConditionCheckbox).not.toBeChecked();

  // expect order confirmation button to be disabled initially
  expect(orderConfirmButton).toBeDisabled();

});

test("Conform order button enables only if terms and condition checked", () => {
  render(<SummaryForm />);

  const termsAndConditionCheckbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  const orderConfirmButton = screen.getByRole("button", { name: /confirm order/i });


  // expect button disabled initially 
  expect(orderConfirmButton).toBeDisabled();

  // toggle checkbox
  userEvent.click(termsAndConditionCheckbox);

  // expect button enabled when terms and condition enabled 
  expect(orderConfirmButton).toBeEnabled();

  // toggle checkbox to not agree terms and condition
  userEvent.click(termsAndConditionCheckbox);

  // expect order confirmation button to be disabled
  expect(orderConfirmButton).toBeDisabled();

})