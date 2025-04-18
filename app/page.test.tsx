/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByText("Leap Year Calculator")).toBeVisible();
  expect(screen.getByText("Coming Soon!")).toBeVisible();
});
