import { render, screen } from "@testing-library/react";


import Options from "../Options";

test("Display image for each option form server", () => {
  render(<Options />);

  // find images 
  const scoopImages = screen.getAllByRole("img", { name: /scoop/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map(element => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);

});