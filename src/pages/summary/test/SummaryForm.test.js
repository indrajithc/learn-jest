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

test("Popover responds on user mouse hover", () => {
  render(<SummaryForm />);

  // initially popover starts out hidden
  const nulPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nulPopover).not.toBeInTheDocument();

  // popover appears upon mouse over of checkbox label
  const termsAndCondition = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndCondition);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndCondition);
  const nullPopoverAgain = screen.getByText(/no ice cream will actually be delivered/i);
  expect(nullPopoverAgain).not.toBeInTheDocument();

});