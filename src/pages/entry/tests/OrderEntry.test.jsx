import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server"

test("handler error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhsot:3030/scoops", (req, res, ctx) =>
      res.apply(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toopings", (req, res, ctx) =>
      res.apply(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});