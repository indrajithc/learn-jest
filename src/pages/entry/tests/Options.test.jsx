import { render, screen } from "@testing-library/react";


import Options from "../Options";

test("Display image for each option form server", async () => {
  render(<Options optionType="scoops" />);

  // find images 
  const scoopImages = await screen.findAllByRole("img", { name: /scoop/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map(element => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);

});