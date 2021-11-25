import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Conform order button enables only if terms and condition checked", () => {
  render(<SummaryForm />);
})